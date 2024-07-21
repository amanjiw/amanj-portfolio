import { ReactNode } from "react";

export type SocialMediasModel = {
	icon: string | ReactNode;
	href: string;
	title: string;
}[];

export type ContractItemsModel = {
	label: string;
	title: string;
	icon: ReactNode | string;
	dir?: string;
	goto?: string;
}[];
