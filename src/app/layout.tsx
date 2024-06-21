import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Container } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import SideBar from "@/components/sidebar/SideBar";
import Navbar from "@/components/navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

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
		<html lang="en" className="bg-secondary">
			<body className={inter.className}>
				<Container className=" mt-28 relative">
					<Grid2 container>
						<Grid2 xs={8}>
							<div className="h-full">
								<Navbar />
								{children}
							</div>
						</Grid2>
						<Grid2 xs={4}>
							<div className="relative h-full">
								<SideBar />
							</div>
						</Grid2>
					</Grid2>
				</Container>
			</body>
		</html>
	);
}
