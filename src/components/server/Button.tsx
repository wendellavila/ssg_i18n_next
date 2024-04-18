import { ButtonProps } from "@/typing/props";

export default function Button(props: ButtonProps){
  return (
    <button
      id={props.id}
      className={`flex flex-row gap-2 items-center px-2 py-1 rounded shadow-sm text-xs
      border border-solid border-transparent bg-gray-700 ${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}