import { createClient, groq } from "next-sanity";
import { apiVersion, dataset, projectId } from "./env";
import { Cases } from "@/types/Cases";
import { Project } from "@/types/Project";
import { Testimonials } from "@/types/Testimonials";

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

export async function getTestimonials(): Promise<Testimonials> {
  const client = createClient({
    projectId,
    dataset,
    apiVersion,
  });
  return client.fetch(
    groq`*[_type == "testimonials" ]{
        _id,
        name,
        title,
        "slug": slug.current,
        content,
        "image": image.asset->url,
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
      "desktop": desktop.asset->url,
      demo_site,
      source_code,
      my_role,
      start_date,
      end_date,
      "tech": tech[].asset->url,
      description,
      problem,
      "accent": accent.asset->url,
      "design": design.asset->url,
      challenges,
      learnings,
    }`,
    { slug }
  );
}
