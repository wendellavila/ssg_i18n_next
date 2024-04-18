import { Content,RouterButton } from '@/components/client';

export default function SubPage(){
  return(
    <div className="flex flex-col items-center">
      <Content id="content" pageName="subPage"/>
      <RouterButton
        route=""
        className="bg-gray-700 hover:bg-sky-500/25 hover:border-sky-700"
        i18nMessage="subPage.labels.goMainPage"
      />
    </div>
  );
}