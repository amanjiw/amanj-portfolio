import React from "react";
import { Download } from "@mui/icons-material";
import { contractItems, socialMedias } from "./sidebar-data";
import Link from "next/link";
import { fullName } from "@/constants";
import ContractItem from "./ContractItem";
import Image from "next/image";

const SideBar = () => {
	return (
		<div className="sidebar-container sticky top-1 flex flex-col items-center ">
			<div className="profile-pic">
				<Image
					src={"/img/profile.jpg"}
					height={260}
					width={260}
					alt="profile pic"
					className="rounded-2xl shadow-2xl"
				/>
			</div>
			<div className=" flex justify-center bg-white flex-col items-center rounded-2xl px-8 pt-12 w-full">
				<div className="over-all flex flex-col items-center w-full mt-4">
					<h2 className="developer-name text-xl">{fullName}</h2>
					<h4 className="text-gray-400 text-sm mt-1 ">
						front-end developer
					</h4>
					<div className="social-medias flex gap-2 mt-4">
						{socialMedias.map((item) => (
							<div
								key={item.href}
								className="rounded-md bg-gray-200 hover:bg-primary hover:text-white transition-colors px-[9px] py-[7px]"
							>
								<Link
									href={item.href}
									className=" h-full w-full"
								>
									{item.icon}
								</Link>
							</div>
						))}
					</div>
				</div>
				<div className="contact bg-gray-100 w-full flex flex-col items-center my-4 py-7  gap-4">
					{contractItems.map((contract) => (
						<ContractItem contract={contract} />
					))}
				</div>
				<button className="download-btn">
					{" "}
					دانلود رزومه
					<span>
						{" "}
						<Download />{" "}
					</span>
				</button>
			</div>
		</div>
	);
};

export default SideBar;
