import { skillsData } from "@/lib/data";
import HeaderText from "./ui/header-text";
import SkillOutline from "./ui/skill-outline";

export default function Skills() {
  return (
    <section
      id="skills"
      key="skills"
      className="ml:space-y-10 space-y-14 scroll-mt-28"
    >
      <HeaderText text="SKILLS" />
      <div className="flex flex-wrap">
        {skillsData.map((skill) => (
          <div key={skill} className="mr-2">
            <SkillOutline text={skill} />
          </div>
        ))}
      </div>
    </section>
  );
}
