interface HeaderTextProps {
  text: string;
}

export default function HeaderText(props: HeaderTextProps) {
  return (
    <h3 className="text-base lg:text-lg font-bold text-[#61398F]">
      {props.text}
    </h3>
  );
}
