import Image from 'next/image';
import { Iconify } from '@/components/client';
import { LoadingScreenProps } from '@/typing/props';

export default function LoadingScreen(props: LoadingScreenProps){
	return (
		<section
			id={props.id}
      className=" min-h-screen flex flex-col items-center justify-center
			bg-gray-900"
		>
			<div className="grow-[2]"></div>
			<Image
				width={100}
				height={65}
				src="/logo_dark.svg"
				alt="Logo"
				className="mb-10 w-auto h-[65px]"
				priority={true}
			/>
			<Iconify icon="svg-spinners:3-dots-fade" width={40} className="text-white"/>
			<div className="grow-[3]"></div>
		</section>
	);
}