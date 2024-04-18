'use client';
import { useRouter,usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';
import { Iconify } from '@/components/client';
import { Button } from '@/components/server';

import { i18nConfig } from '@/utils/constants';
import { Map } from '@/typing/types';

export default function LanguageSelector(){
	const router = useRouter();
  const locale = useLocale();
	let pathname = usePathname();

	const buttonData: Map<{className: string, flag: string}> = {
		'en': {
			className: 'hover:bg-red-500/10 hover:border-red-700',
			flag: 'flagpack:us'
		},
		'pt': {
			className: 'hover:bg-yellow-500/10 hover:border-yellow-600',
			flag: 'flagpack:br'
		}
	};

	const handleClick = (lang: string) => {
		if(locale !== lang){
			pathname = `/${lang}/${pathname.substring(4)}`;
			localStorage.setItem("lang", lang);
			router.push(pathname);
		}
	};
  
	return (
		<section className="flex flex-col justify-center items-center gap-2 mb-3">
			<span>Switch Language</span>
			<div className="flex flex-row gap-2">
				{
					i18nConfig.locales.map(
						locale =>
						<Button key={locale} onClick={() => handleClick(locale)}
							className={
								`${buttonData[locale].className}`
							}
						>
							<Iconify icon={buttonData[locale].flag} width={20}/>
							{locale.toLocaleUpperCase()}
						</Button>
					)
				}
			</div>
		</section>
	);
}