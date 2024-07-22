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
		href: "/",
	},
	{
		title: "رزومه",
		action: () => {},
		icon: <Article />,
		href: "/resume",
	},
	{
		title: "کارها",
		action: () => {},
		icon: <WorkOutline />,
		href: "/works",
	},
	{ title: "وبلاگ", action: () => {}, icon: <Book />, href: "/blog" },
	{ title: "تماس", action: () => {}, icon: <Call />, href: "/contact" },
];
