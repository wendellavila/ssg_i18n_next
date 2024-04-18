import { archivo } from '@/utils/constants';
import { getTranslationMessages } from '@/utils/functions';
import { ClientProviderLoader } from '@/components/client';
export { generateStaticParams, generateMetadata } from '@/utils/functions';

import { Header } from '@/components/server';
import { LanguageSelector } from '@/components/client';

export default async function InternationalizedLayout({
  children, params: {lang}
}: {
  children: React.ReactNode,
  params : {lang: string},
}) {
  const messages = await getTranslationMessages(lang);
  return (
    <html lang={lang}>
      <body className={`${archivo.className}`}>
        <ClientProviderLoader lang={lang} messages={messages}>
          <div className="min-h-screen flex flex-col">
            <Header/>
            <div className="grow">
              {children}
            </div>
            <LanguageSelector/>
          </div>
        </ClientProviderLoader>
      </body>
    </html>
  );
}
