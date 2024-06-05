import Image from 'next/image';
import { Iconify } from '@/components/client';
import { ComponentProps } from '@/typing/props';
import { basePath } from '@/utils/constants';

interface LoadingScreenProps extends ComponentProps {
  imageSrc?: string;
}

export default function LoadingScreen(props: LoadingScreenProps) {
  const { id } = props;
  return (
    <section
      id={id}
      className=" min-h-screen flex flex-col items-center justify-center
			bg-gray-900"
    >
      <div className="grow-[2]"></div>
      <Image
        width={100}
        height={65}
        src={`${basePath}/logo_dark.svg`}
        alt="Logo"
        className="mb-10 w-auto h-[65px]"
        priority={true}
      />
      <Iconify
        icon="svg-spinners:3-dots-fade"
        width={40}
        className="text-white"
      />
      <div className="grow-[3]"></div>
    </section>
  );
}
