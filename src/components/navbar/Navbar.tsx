import { Paper } from "@mui/material";

import NavbarItem from "./NavbarItem";

const Navbar = () => {
	return (
		<Paper
			elevation={1}
			sx={{ height: 100, width: "fit-content" }}
			className="p-5 rounded-lg flex gap-5 justify-center items-center"
		>
			<NavbarItem> test </NavbarItem>
			<NavbarItem> test </NavbarItem>
			<NavbarItem> test </NavbarItem>
			<NavbarItem> test </NavbarItem>
			<NavbarItem> test </NavbarItem>
		</Paper>
	);
};

export default Navbar;
