import { ProjectType } from "@/types/ProjectType";
import Image from "next/image";
import { SocialIcon } from "./SocialIcon";
import { ProjectCardLabel } from "./ProjectCardLabel";

export function ProjectCard({
  name,
  description,
  image,
  url,
  source,
  tags=[],
}: ProjectType) {
  return (
    <section className="flex flex-col items-center bg-gray-50 rounded-lg border shadow-md md:flex-row md:max-w-xl h-80 hover:bg-gray-200">
      <Image
        src={image}
        alt={name}
        width={384}
        height={384}
        className="object-cover w-auto h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg p-2"
      />

      <section className="flex flex-col p-4 leading-normal md:pt-8">
        <section className="flex flex-row justify-between">
          <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {name}
          </h2>
          <div className="flex flex-row gap-1">
            {source && (
              <SocialIcon name="github" href={source} border={false} />
            )}
            {url && (
              <SocialIcon name="external-link" href={url} border={false} />
            )}
          </div>
        </section>
        <p className="mb-3 font-normal text-gray-700">{description}</p>
        <div className="px-4 pt-4 pb-2">
          {tags?.map(({tech, color}) => (
            <ProjectCardLabel key={tech} name={tech} color={color} />
          ))}
        </div>
      </section>
    </section>
  );
}
