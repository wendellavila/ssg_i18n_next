import { ComponentProps } from '@/typing/props';

export interface ButtonProps extends ComponentProps {
  onClick?: () => void;
}

export default function Button(props: ButtonProps) {
  const { className, children, id, onClick } = props;
  return (
    <button
      id={id}
      className={`flex flex-row gap-2 items-center px-2 py-1 rounded shadow-sm text-xs
      border border-solid border-transparent bg-gray-700 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
