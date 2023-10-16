import React from "react";
import { writingTabs } from "../components/constants/writingTabs";
import Image from "next/image";
import { templates } from "./constants/Templates";

export default function page() {
	return (
		<section className="bg-[url('/main/background-image-writing.png')] bg-cover bg-center absolute inset-0 w-full h-full pt-32 px-7 text-sm">
			<h1 className="text-primary-yellow text-3xl font-semibold leading-loose">
				Templates
			</h1>
			<p className="capitalize text-white/80">
				Seeking that perfect content? Look no further! get ready to explore out
				fantastic lineup of templates
			</p>
			<div className="flex gap-x-4 gap-y-3 flex-wrap mt-4">
				{writingTabs.map((tab, index) => (
					<div
						key={index}
						className="flex gap-3 bg-[#2F3133]/90 py-1.5 px-4 rounded-full ring-1 ring-[#2F3133] hover:bg-[#393b3d]/90 transition duration-300 cursor-pointer">
						{tab.icon && (
							<Image
								src={tab.icon}
								alt="Icon"
								width={30}
								height={30}
								className="w-5 h-5 object-cover"
							/>
						)}
						<p className="text-sm capitalize">{tab.title}</p>
					</div>
				))}
			</div>

			<form>
				<div className="bg-[#323232]/70 ring-1 ring-[#514E4E] h-12 rounded-lg flex items-center gap-2 p-0.5 border-bottom-gradient mt-6">
					<div className="cursor-pointer grid place-content-center h-full mx-2 my-0.5 p-1.5 rounded-md transition duration-300">
						<Image
							src="/main/search.svg"
							alt="logo"
							width={20}
							height={20}
							draggable={false}
						/>
					</div>
					<input
						type="text"
						className="flex-1 bg-transparent outline-none placeholder:capitalize text-sm"
						placeholder="search for a template"
					/>
				</div>
			</form>
			<div className="grid grid-cols-5 gap-4 py-2 mt-3">
				{templates.map((template, index) => (
					<div
						className="bg-[url('/rectangle-background-h-center.png')] bg-cover bg-center bg-no-repeat p-5 ring-1 ring-white/10 rounded-2xl overflow-hidden space-y-3 relative cursor-pointer"
						key={index}>
						<Image
							src={template.icon}
							alt="logo"
							width={54}
							height={54}
							draggable={false}
						/>
						{template.isPremium && (
							<Image
								src="/main/lock-premium.svg"
								alt="logo"
								width={20}
								height={20}
								draggable={false}
								className="absolute top-0 right-0 m-5"
							/>
						)}
						<h1 className="text-xl font-bold">{template.title}</h1>
						<p className="text-[#B1B0B6]">{template.description}</p>
					</div>
				))}
			</div>
		</section>
	);
}