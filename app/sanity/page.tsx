import { getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";

export default async function sanity() {
  const projects = await getProjects();
  return (
    <div className="ml-[10rem] flex flex-col">
      <h1>My Projects</h1>
      <div className="border">
        {projects.map((project) => (
          <div key={project._id}>
            {/* {project.image && (
              <Image
                src={project.image}
                alt={project.name}
                width={100}
                height={100}
              />
            )} */}
            {project.name}
          </div>
        ))}
      </div>
    </div>
  );
}
