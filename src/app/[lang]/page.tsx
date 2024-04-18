import { Content,RouterButton } from '@/components/client';

export default function MainPage(){
  return(
    <div className="flex flex-col items-center">
      <Content id="content" pageName="mainPage"/>
      <RouterButton
        route="subpage"
        i18nMessage="mainPage.labels.goSubPage"
      />
    </div>
  );
}