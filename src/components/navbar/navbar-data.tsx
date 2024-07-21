import {
	PermIdentity,
	Article,
	WorkOutline,
	Book,
	Call,
} from "@mui/icons-material";

import { NavbarItemsData } from "@/types/navbar";

export const navbarData: NavbarItemsData = [
	{
		title: "درباره من",
		action: () => {},
		icon: <PermIdentity />,
	},
	{
		title: "رزومه",
		action: () => {},
		icon: <Article />,
	},
	{
		title: "کارها",
		action: () => {},
		icon: <WorkOutline />,
	},
	{ title: "وبلاگ", action: () => {}, icon: <Book /> },
	{ title: "تماس", action: () => {}, icon: <Call /> },
];
