import { Raleway } from 'next/font/google';
import './globals.css';
import Navigation from './components/navigation/navigation';
import Link from 'next/link';
import Footer from './components/footer/footer';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';

const raleway = Raleway({ subsets: ['latin'] });

export const metadata = {
	title: 'Tiia Pitkänen | Portfolio',
	description:
		'Tiia Pitkänenin portfolio: web-kehityksen, liiketoiminnan ja teknologian projekteja.',
};

export default function RootLayout({ children }) {
	return (
		<html lang="fi">
			<body className={raleway.className}>
				<Navigation />
				{children}
				<SpeedInsights />
				<Analytics />
				<Footer />
			</body>
		</html>
	);
}
