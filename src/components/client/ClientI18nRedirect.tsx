'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import { i18nConfig } from '@/utils/constants';
import { getBrowserPreferredLanguage } from '@/utils/functions';
import { LoadingScreen } from '@/components/server';

/**
 * Gets preferred language from either localStorage or navigator.languages
 * and redirects to the first supported locale.
 */
export default function ClientI18nRedirect() {
  const [locale, setLocale] = useState<string>('');
  const router = useRouter();

  useEffect(() => {
    const localStorageLocale = localStorage.getItem('lang') ?? '';
    if(localStorageLocale && i18nConfig.locales.includes(localStorageLocale)){
      setLocale(localStorageLocale);
    }
    else {
      setLocale(getBrowserPreferredLanguage(true));
    }
    if(locale){
      router.replace(`/${locale}`);
    }
  }, [locale, router]);

  return(
    <main>
      <LoadingScreen id="locale-loading"/>
    </main>
  );
}