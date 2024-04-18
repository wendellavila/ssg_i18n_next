'use client';
import { NextIntlClientProvider } from 'next-intl';
import { ClientProviderLoaderProps } from '@/typing/props';
import { timezone } from '@/utils/constants';

export default function ClientProviderLoader(props: ClientProviderLoaderProps){
  return (
    <NextIntlClientProvider
      locale={props.lang}
      messages={props.messages}
      // timezone and now must be set when using output: export
      timeZone={timezone}
      now={new Date()}
    >
      {props.children}
    </NextIntlClientProvider>
  );
}