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
        description,
        "image": image.asset->url,
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
      image,
      url,
      "desktop_image": image.asset->url,
      "mobile_image": image.asset->url,
      demo_site,
      source_cod,
      my_role,
      start_date,
      end_date,
      "tech_stack" : image.asset->url,
      description: PortableTextBlock[];,
      "place_image": image.asset->url,
      "design_image": image.asset->url,
      challenge_one,
      challenge_two,
      challenge_three,
      learnings_one,
      learnings_two,
      learnings_three,
      learnings_four
    }`
  );
}
