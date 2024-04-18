import './globals.css';
import { Props } from '@/typing/props';
export { generateMetadata } from '@/utils/functions';

export default function RootLayout({children}: Props) {
  return children;
}