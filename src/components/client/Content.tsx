'use client';
import { useTranslations } from "next-intl";
import { ContentProps } from '@/typing/props';

export default function Content(props: ContentProps){
  const i18n = useTranslations(`${props.pageName}.labels`);
  return (
    <section id={props.id} className={`px-8 flex flex-col items-center mb-8 ${props.className}`}>
      <article className="max-w-3xl">
        <h1 className="text-3xl mb-1 text-center" id={`${props.id ? props.id+'-' : ''}title`}>
          {i18n('title')}
        </h1>
        <h2 className="text-md mb-10 text-center text-gray-100" id={`${props.id ? props.id+'-' : ''}subtitle`}>
          {i18n('subtitle')}
        </h2>
        <p className="text-md text-justify text-gray-200" id={`${props.id ? props.id+'-' : ''}content`}>
          {i18n('content')}
        </p>
      </article>
    </section>
  );
}