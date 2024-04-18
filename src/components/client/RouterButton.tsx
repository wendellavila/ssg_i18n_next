'use client';
import { useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import { useTranslations } from "next-intl";

import { Button } from '@/components/server';
import { Iconify } from '@/components/client';

import { RouterButtonProps } from '@/typing/props';

export default function RouterButton(props: RouterButtonProps) {
  const router = useRouter();
  const locale = useLocale();
  const i18n = useTranslations();

  const handleClick = () => router.push(`/${locale}/${props.route}`);

  return (
    <Button
      onClick={handleClick}
      className={`bg-gray-700 hover:bg-sky-500/10 hover:border-sky-700 text-base ${props.className}`}
    >
      {props.icon ?? <Iconify icon="material-symbols:highlight-mouse-cursor" width={20}/>}
      {props.children ?? (props.i18nMessage ? i18n(props.i18nMessage) : undefined)}
    </Button>
  );
}