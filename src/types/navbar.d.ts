import React from "react";

export type NavbarItemsData = {
	title: string;
	action: () => unknown;
	icon?: React.ReactNode;
	href?: string;
}[];
