import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.scss";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Container } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import SideBar from "@/components/sidebar/SideBar";
import Navbar from "@/components/navbar/Navbar";

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
});

const fanum = localFont({
	src: [
		{
			path: "../../public/media/fonts/regular.woff2",
			weight: "100",
			style: "normal",
		},
		{
			path: "../../public/media/fonts/medium-fanum.woff",
			weight: "300",
			style: "normal",
		},
		{
			path: "../../public/media/fonts/bold-fanum.woff",
			weight: "500",
			style: "normal",
		},
		{
			path: "../../public/media/fonts/extrabold-fanum.woff",
			weight: "700",
			style: "normal",
		},
	],
	variable: "--font-fanum",
});

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			dir="rtl"
			className={`${inter.variable} ${fanum.variable} bg-secondary`}
		>
			<body className="">
				<Container maxWidth="xl" className=" mt-28 relative">
					<Grid2 container columnSpacing={2}>
						<Grid2 xs={3.3}>
							<div className="relative h-full">
								<SideBar />
							</div>
						</Grid2>
						<Grid2 xs={8}>
							<div className="h-full flex flex-col">
								<Navbar />
								<div className="flex min-h-screen flex-col items-center justify-between bg-white mt-2 rounded-2xl">
									{children}
								</div>
							</div>
						</Grid2>
					</Grid2>
				</Container>
			</body>
		</html>
	);
}
