/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Button from "./Button";

interface CardProps {
	title: string;
	image_url: string;
	description: string;
}

export default function Card({ title, image_url, description }: CardProps) {
	return (
		<div
			className=" bg-gray-700 h-[25rem] text-white text-left flex flex-col items-start transition hover:scale-[1.05] hover:z-10 duration-300 shadow-2xl hover:shadow-purple-800"
			style={{ width: "350px" }}
		>
			<img
				style={{ borderStartStartRadius: "2%", width: "350px" }}
				src={image_url}
				alt=""
			/>
			<div className="p-2">
				<h1 className="pt-3 px-3 text-xl text-violet-400">{title}</h1>
				<p className="pt-5 px-3 text-sm">{description}</p>
			</div>
			<div className=" p-3 buttons w-full flex space-x-4 justify-center">
				<Button
					text="Código"
					url="https://github.com/claudi-tm/boracodar/tree/main/src/app/calculator"
				/>
				<Button text="Ver" url="./calculator" />
			</div>
		</div>
	);
}
