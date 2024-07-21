import { ContractItemsModel } from "@/types/sidebar";
import React from "react";

const ContractItem = ({
	contract,
}: {
	contract: ContractItemsModel[number];
}) => {
	return (
		<div className=" contact-item-container w-full flex items-center justify-start gap-2 pb-2 ">
			<div className="contract-icon flex items-center justify-center shadow-md">
				{contract.icon}
			</div>
			<div className="contract-details ">
				<p className="text-gray-400">{contract.label}</p>
				<p className="text-gray-700" dir={contract.dir}>
					{contract.title}
				</p>
			</div>
		</div>
	);
};

export default ContractItem;
