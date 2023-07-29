import SimpleButton from "./ui/simple-button";
import { socialLinks } from "@/lib/data";

export default function HeroText() {
  return (
    <div className="ml:space-y-10 space-y-14">
      <p className="text-justify">
        👋 Hi, I'm Abhin. Freelance developer and writer. I'm passionate about
        building web experiences that solve real problems and improve lives.
        When not working, I am mostly likely digging through Reddit or spinning
        up websites around obscure topics.
      </p>
      <div className="flex flex-wrap items-center sm:space-x-2">
        {socialLinks.map((link) => (
          <SimpleButton key={link.link} {...link} />
        ))}
      </div>
    </div>
  );
}
