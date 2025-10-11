import { Raleway } from 'next/font/google';
import './globals.css';
import Navigation from './components/navigation/navigation';
import Link from 'next/link';
import Footer from './components/footer/footer';
import { SpeedInsights } from "@vercel/speed-insights/next"

const raleway = Raleway({ subsets: ['latin'] });

export const metadata = {
	title: 'Portfolio - Tiia Pitkänen',
	description: 'Portfolio - Tiia Pitkänen',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={raleway.className}>
				<Navigation />
				{children}
				<SpeedInsights />
				<Footer />
			</body>
		</html>
	);
}
