import { experiencesData } from "@/lib/data";
import HeaderText from "./ui/header-text";
import ExperienceListing from "./ui/experience-listing";

export default function Experience() {
  return (
    <section id="experience" className="ml:space-y-10 space-y-14 scroll-mt-28">
      <HeaderText text="EXPERIENCE" />
      {experiencesData.map((experience) => (
        <ExperienceListing {...experience} />
      ))}
    </section>
  );
}
