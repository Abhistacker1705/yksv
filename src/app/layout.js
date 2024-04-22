import {
	Inter,
	Jost,
	Poppins,
	Noto_Serif_Malayalam,
	Noto_Sans_Malayalam,
	Baloo_Chettan_2,
} from 'next/font/google';

import './globals.css';

const inter = Inter({subsets: ['latin'], variable: '--font-inter'});
const jost = Jost({subsets: ['latin'], variable: '--font-jost'});
const poppins = Poppins({
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	variable: '--font-poppins',
});

// const mal = Noto_Sans_Malayalam({
// 	subsets: ['malayalam'],
// 	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
// 	variable: '--font-mal',
// });

const mal = Baloo_Chettan_2({
	subsets: ['malayalam'],
	weight: ['400', '500', '600', '700', '800'],
	variable: '--font-mal',
});

export const metadata = {
	title: 'Yuva Kairali Souhrida Vedi',
	description: 'An organisation to nurture student bond',
};

export default function RootLayout({children}) {
	return (
		<html
			lang="en"
			className={`${inter.variable} ${jost.variable} ${poppins.variable} ${mal.variable}`}>
			<body className={`${poppins.className} text-white`}>{children}</body>
		</html>
	);
}
