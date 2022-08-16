import type { AppProps } from 'next/app';
import '@styles/ui.scss';
import Footer from '@components/Layouts/Footer';
import Header from '@components/Layouts/Header';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Header />
			<div className="contents-wrapper">
				<Component {...pageProps} />
			</div>
			<Footer />
		</>
	);
}

export default MyApp;
