import Image from 'next/image';

export default function Header(){
  return (
    <header id="header" className="self-center">
      <Image
        width={100}
        height={50}
        src="/logo_dark.svg"
        alt="Logo"
        className="m-6 w-auto h-[50px]"
      />
    </header>
  );
}