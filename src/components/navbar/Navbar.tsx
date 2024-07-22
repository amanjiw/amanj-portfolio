import { Paper } from "@mui/material";

import NavbarItem from "./NavbarItem";
import { navbarData } from "./navbar-data";

const Navbar = () => {
	return (
		<Paper
			elevation={1}
			sx={{ height: 130, width: "fit-content" }}
			className="p-9 rounded-2xl flex gap-5 justify-center items-center  self-end"
		>
			{navbarData.map((item) => (
				<NavbarItem
					title={item.title}
					icon={item.icon}
					href={item.href}
				/>
			))}
		</Paper>
	);
};

export default Navbar;
