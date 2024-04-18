import { createTranslator } from 'next-intl';
import { i18nConfig } from '@/utils/constants';
import { I18n } from '@/typing/types';

/**
 * Returns the preferred language among supported languages in config/i18nConfig
 * @param {boolean} ignoreRegion - If true, will use only the primary language subtag,
 * e.g. 'en' instead of 'en-US'
*/
export function getBrowserPreferredLanguage(ignoreRegion?: boolean) : string {
    const languages = typeof window !== 'undefined' ? navigator.languages : [];
    
    for(const language of languages){
        const lang = ignoreRegion === true ? language.substring(0,2) : language;
        if(i18nConfig.locales.includes(lang)){
            return lang;
        }
    }
    return i18nConfig.defaultLocale;
}

/**
 * Generates internationalized metadata
 * @param {{lang: string}} params - Path parameters containing a supported lang.
 * If lang is undefined or not supported, the default language in i18nConfig is used.
*/
export async function generateMetadata({params: {lang}}: {params: {lang: string}}){
    const i18n = await getTranslations(lang, 'metadata');
    return {
        title: i18n('title'),
        description: i18n('description'),
        icons: {
            icon: `/favicon.png`
        }
    };
}

/**
 * Loads JSON files containing translations to be used for Internationalization.
 * @param {string} locale - The locale of the language to be loaded.
*/
export async function getTranslationMessages(locale: string) {
    return (await import(`@/i18n/translations_${locale}.json`)).default
}

/**
 * Creates a next-intl translator to be used outside of client components.
 * @param {string} locale - The locale of the language to be loaded.
*/
async function getTranslations(locale?: string, namespace?: string) : Promise<I18n> {
    if(!locale) locale = i18nConfig.defaultLocale;
    const translator = createTranslator({
        locale,
        messages: await getTranslationMessages(locale),
        namespace: namespace
    })
    return translator.raw;
}

/**
 * Generates Next.js SSG Static Params using the locales defined in i18nConfig.
*/
export async function generateStaticParams() {
    return i18nConfig.locales.map((locale) => ({lang: locale}));
};