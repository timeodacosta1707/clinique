import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "CRM Vétérinaire",
	description: "Outil de gestion des clients et de leurs animaux.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="fr"
			className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth bg-blue-50`}
		>
			<body>
				<Navbar />
				<main>
					{children}
				</main>

			</body>
		</html>
	);
}