import {
	birthDate,
	email,
	location,
	phoneNumber,
	phoneNumberLabel,
} from "@/constants";
import { ContractItemsModel, SocialMediasModel } from "@/types/sidebar";
import {
	LinkedIn,
	X,
	Facebook,
	GitHub,
	Phone,
	AlternateEmail,
	LocationOn,
	CalendarMonth,
} from "@mui/icons-material";

export const socialMedias: SocialMediasModel = [
	{
		title: "linkedin",
		href: "/linkedin",
		icon: <LinkedIn fontSize="small" />,
	},
	{ title: "github", href: "/github", icon: <GitHub fontSize="small" /> },
	{ title: "x profile", href: "/x", icon: <X fontSize="small" /> },
	{
		title: "facebook",
		href: "/facebook",
		icon: <Facebook fontSize="small" />,
	},
];

export const contractItems: ContractItemsModel = [
	{
		label: "تلفن",
		title: phoneNumberLabel,
		icon: <Phone color="error" />,
		dir: "ltr",
		goto: phoneNumber,
	},
	{
		label: "ایمیل",
		title: email,
		icon: <AlternateEmail color="warning" />,
		goto: email,
	},
	{ label: "مکان", title: location, icon: <LocationOn color="primary" /> },
	{
		label: "تولد",
		title: birthDate,
		icon: <CalendarMonth color="secondary" />,
	},
];
