import { socialType } from "@/lib/type";
import { FiArrowUpRight } from "react-icons/fi";

export default function SimpleButton(props: socialType) {
  return (
    <button
      className="text-[#878787] border border-[#4A4A4A] hover:bg-[#8B5FBF] hover:text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
      type="button"
    >
      {props.text}
    </button>
  );
}
