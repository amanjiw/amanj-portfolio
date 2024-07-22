"use client";
import { usePathname, useRouter } from "next/navigation";

import { Box } from "@mui/material";
import { NavbarItemsProps } from "./navbar.types";
import { FC } from "react";

const NavbarItem: FC<NavbarItemsProps> = ({ children, title, icon, href }) => {
	const pathname = usePathname();
	const router = useRouter();

	return (
		<Box
			sx={{
				background:
					href === pathname
						? "linear-gradient(39deg,#fa5252,#dd2476)"
						: "#F3F6F6",
				transition: "all 0.3s",
				height: 80,
				width: 80,
				borderRadius: 2,
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				cursor: "pointer",
				color: href === pathname ? "white" : "rgb(68 86 108)",
				":hover ": {
					background: "linear-gradient(39deg,#fa5252,#dd2476)",
					color: "white",
				},
			}}
			onClick={() => {
				if (href) router.push(href);
			}}
		>
			<div className="h-full w-full flex flex-col items-center justify-center navbar-item-container gap-1">
				<span className="">{icon}</span>
				<p>{title}</p>
			</div>
		</Box>
	);
};

export default NavbarItem;
