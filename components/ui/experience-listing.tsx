import { ExperienceType } from "@/lib/type";

export default function ExperienceListing(props: ExperienceType) {
  return (
    <div>
      <p className="font-bold text-[#878787] mb-2">{props.date}</p>
      <p className="text-justify">{props.description}</p>
    </div>
  );
}
