/**
 * This file is used to initialize pages. You can use it to persist layout between page changes.s
 * It runs before the page is rendered for every page 
 */
import 'styles/globals.css';
import type { AppProps } from 'next/app';

/**
 * Renders the page 
 * @param Component page component
 * @param pageProps page props
 * @returns rendered page
 */
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;

