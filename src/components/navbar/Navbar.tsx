import { Paper } from "@mui/material";

import NavbarItem from "./NavbarItem";
import { navbarData } from "./navbar-data";

const Navbar = () => {
	return (
		<Paper
			elevation={1}
			sx={{ height: 100, width: "fit-content" }}
			className="p-5 rounded-2xl flex gap-5 justify-center items-center  self-end"
		>
			{navbarData.map((item) => (
				<NavbarItem title={item.title} icon={item.icon} />
			))}
		</Paper>
	);
};

export default Navbar;
