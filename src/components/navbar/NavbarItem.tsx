import { Box } from "@mui/material";
import { NavbarItemsProps } from "./navbar.types";
import { FC } from "react";

const NavbarItem: FC<NavbarItemsProps> = ({ children, title, icon }) => {
	return (
		<Box
			sx={{
				bgcolor: "#F3F6F6",
				height: 70,
				width: 70,
				borderRadius: 2,
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				cursor: "pointer",
				color: "gray",
				":hover ": {
					bgcolor: "var(--color-primary)",
					color: "white",
				},
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
