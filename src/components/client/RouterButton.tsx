'use client';
import { useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import { useTranslations } from 'next-intl';

import { Button } from '@/components/server';
import { Iconify } from '@/components/client';

import { ComponentProps } from '@/typing/props';

export interface RouterButtonProps extends ComponentProps {
  route: string;
  icon?: React.ReactNode;
  i18nMessage?: string;
}

export default function RouterButton(props: RouterButtonProps) {
  const { className, children, i18nMessage, icon, route } = props;
  const router = useRouter();
  const locale = useLocale();
  const i18n = useTranslations();

  const handleClick = () => router.push(`/${locale}/${route}`);

  return (
    <Button
      onClick={handleClick}
      className={`bg-gray-700 hover:bg-sky-500/10 hover:border-sky-700 text-base ${className}`}
    >
      {icon ?? (
        <Iconify icon="material-symbols:highlight-mouse-cursor" width={20} />
      )}
      {children ?? (i18nMessage ? i18n(i18nMessage) : undefined)}
    </Button>
  );
}
