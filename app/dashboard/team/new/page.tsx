import React from "react";
import Form from "./components/Form";

export default function page() {
	return (
		<div className="p-10">
			<div className="w-full bg-gradient-to-br from-[#ffffff1f] to-[#8f8f8f0c] backdrop-blur-md rounded-lg p-10">
				<Form />
			</div>
		</div>
	);
}
