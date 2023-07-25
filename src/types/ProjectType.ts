import { StaticImageData } from "next/image";

export type ProjectType = {
  name: string;
  description: string;
  image: StaticImageData;
  url?: string;
  source?: string;
  tags?: TechType[];
}

type TechType = {
  tech: string;
  color: string;
}