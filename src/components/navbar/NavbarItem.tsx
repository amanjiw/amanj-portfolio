import { Box } from "@mui/material";
import { NavbarItemsProps } from "./navbar.types";
import { FC } from "react";

const NavbarItem: FC<NavbarItemsProps> = ({ children }) => {
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
                ":hover ":{
                    bgcolor:"#F54A58"
                }
			}}
		>
			{" "}
			{children}{" "}
		</Box>
	);
};

export default NavbarItem;
