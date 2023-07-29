import HeaderText from "./ui/header-text";

export default function Contact() {
  return (
    <section
      id="contact"
      key="contact"
      className="ml:space-y-10 space-y-14 scroll-mt-28"
    >
      <HeaderText text="CONTACT" />
      <p>
        Best way to reach me is through email:
        <a
          href="mailto:abhinishere@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#878787] hover:text-[#8B5FBF] cursor-pointer font-medium"
        >
          abhinishere@gmail.com
        </a>
      </p>
    </section>
  );
}
