import { IconType } from "react-icons";

export interface socialType {
  text: string;
  link: string;
  icon: IconType;
}

export interface projectType {
  title: string;
  description: string;
  source: string;
  image: string;
}

export interface ExperienceType {
  title?: string;
  location?: string;
  description: string;
  icon: IconType;
  date: string;
}
