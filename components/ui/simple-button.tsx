import { socialType } from "@/lib/type";

export default function SimpleButton(props: socialType) {
  return (
    <a
      href={props.link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center text-[#878787] border border-[#4A4A4A] hover:bg-[#8B5FBF] hover:text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 cursor-pointer"
      type="button"
    >
      <div className="mr-2">
        <props.icon />
      </div>
      {props.text}
    </a>
  );
}
