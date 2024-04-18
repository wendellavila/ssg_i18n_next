import { Archivo } from 'next/font/google';

export const archivo = Archivo({
  subsets:['latin']
});

export const timezone = 'America/Sao_Paulo';
export const i18nConfig = {
  locales: ['en', 'pt'],
  defaultLocale: 'en'
}