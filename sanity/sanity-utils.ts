import { createClient, groq } from "next-sanity";
import { apiVersion, dataset, projectId } from "./env";
import { Cases } from "@/types/Cases";
import { Project } from "@/types/Project";

export async function getCases(): Promise<Cases[]> {
  const client = createClient({
    projectId,
    dataset,
    apiVersion,
  });
  return client.fetch(
    groq`*[_type == "cases"]{
        _id,
        title,
        "slug": slug.current,
        description,
        "image": image.asset->url,
        case_study,
        bg
    }`
  );
}

export async function getProject(slug: string): Promise<Project> {
  const client = createClient({
    projectId,
    dataset,
    apiVersion,
  });
  return client.fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      url,
      "desktop": image.asset->url,
      "mobile": image.asset->url,
      demo_site,
      source_code,
      my_role,
      start_date,
      end_date,
      "tech": image.asset->url,
      description,
      problem,
      "accent": image.asset->url,
      "design": image.asset->url,
      challenges
      learnings,
    }`,
    { slug }
  );
}
