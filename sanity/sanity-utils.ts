import { createClient, groq } from "next-sanity";
import { apiVersion, dataset, projectId } from "./env";
import { Project } from "@/types/Project";
import { Cases } from "@/types/Cases";

export async function getProjects(): Promise<Project[]> {
  const client = createClient({
    projectId,
    dataset,
    apiVersion,
  });
  return client.fetch(
    groq`*[_type == "project"]{
        _id,
        _createAt,
        name,
        "image": image.asset->url,
        url, 
        content
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
        _createAt,
        name,
        "slug": slug.current,
        "image": image.asset->url,
        url, 
        content
    }`,
    { slug }
  );
}

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
