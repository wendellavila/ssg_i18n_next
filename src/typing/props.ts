import { AbstractIntlMessages } from 'next-intl';

export interface ClientProviderLoaderProps {
    children: React.ReactNode;
    lang: string;
    messages: AbstractIntlMessages | undefined;
}
export interface RouterButtonProps extends Props {
    route: string;
    icon?: React.ReactNode;
    i18nMessage?: string;
}
export interface ContentProps extends Props {
    pageName: string;
}
export interface ButtonProps extends Props {
    onClick?: () => void;
}
export interface LoadingScreenProps extends Props {
    imageSrc?: string;
}
export interface Props {
    id?: string;
    children?: React.ReactNode;
    className?: string;
};