'use client';
import { useTranslations } from 'next-intl';
import { ComponentProps } from '@/typing/props';

interface ContentProps extends ComponentProps {
  pageName: string;
}

export default function Content(props: ContentProps) {
  const { className, id, pageName } = props;
  const i18n = useTranslations(`${pageName}.labels`);
  return (
    <section
      id={id}
      className={`px-8 flex flex-col items-center mb-8 ${className}`}
    >
      <article className="max-w-3xl">
        <h1
          className="text-3xl mb-1 text-center"
          id={`${id ? id + '-' : ''}title`}
        >
          {i18n('title')}
        </h1>
        <h2
          className="text-md mb-10 text-center text-gray-100"
          id={`${id ? id + '-' : ''}subtitle`}
        >
          {i18n('subtitle')}
        </h2>
        <p
          className="text-md text-justify text-gray-200"
          id={`${id ? id + '-' : ''}content`}
        >
          {i18n('content')}
        </p>
      </article>
    </section>
  );
}
