import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react'
import '@styles/main.scss';
import Footer from '@components/Layouts/Footer';
import Header from '@components/Layouts/Header';


function MyApp({ Component, pageProps: {session, ...pageProps} }: AppProps) {

	return (
		<>
			<SessionProvider session={session}>
				<Header />
				<div className="contents-wrapper">
					<Component {...pageProps} />
				</div>
				<Footer />
			</SessionProvider>
		</>
	);
}

export default MyApp;
