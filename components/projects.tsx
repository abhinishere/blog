import { projectsData } from "@/lib/data";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import HeaderText from "./ui/header-text";

export default function Projects() {
  return (
    <section id="projects" className="ml:space-y-10 space-y-14 scroll-mt-28">
      <HeaderText text="PROJECTS" />
      <div className="grid grid-cols-1 gap-4 w-full ml:space-y-10 space-y-14">
        {projectsData.map((project) => (
          <div className="space-y-2">
            <Image
              className="rounded"
              src={project.image}
              alt={project.title}
              width={500}
              height={200}
            />
            <div className="flex text-[#878787] hover:text-[#8B5FBF] cursor-pointer">
              <h2 className=" text-base lg:text-lg font-bold">
                {project.title}
              </h2>
              <FiArrowUpRight />
            </div>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
