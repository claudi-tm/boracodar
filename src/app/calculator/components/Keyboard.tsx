import { useState } from "react";
import { FunctionOBject } from "../page";
import CalcButton from "./CalcButton";

const buttons = [
	{
		text: "CE",
		text_color: "#7F45E2",
		type: "",
	},
	{
		text: "C",
		text_color: "",
		type: "",
	},
	{
		text: "%",
		text_color: "",
		type: "operator",
	},
	{
		text: "/",
		text_color: "",
		type: "operator",
	},
	{
		text: "7",
		text_color: "",
		type: "",
	},
	{
		text: "8",
		text_color: "",
		type: "",
	},
	{
		text: "9",
		text_color: "",
		type: "",
	},
	{
		text: "X",
		text_color: "",
		type: "operator",
	},
	{
		text: "4",
		text_color: "",
		type: "",
	},
	{
		text: "5",
		text_color: "",
		type: "",
	},
	{
		text: "6",
		text_color: "",
		type: "",
	},
	{
		text: "-",
		text_color: "",
		type: "operator",
	},
	{
		text: "1",
		text_color: "",
		type: "",
	},
	{
		text: "2",
		text_color: "",
		type: "",
	},
	{
		text: "3",
		text_color: "",
		type: "",
	},
	{
		text: "+",
		text_color: "",
		type: "operator",
	},
	{
		text: "+/-",
		text_color: "",
		type: "",
	},
	{
		text: "0",
		text_color: "",
		type: "",
	},
	{
		text: ",",
		text_color: "",
		type: "operator",
	},
	{
		text: "=",
		text_color: "",
		type: "operator",
	},
];

interface KeyBoardProps {
	handleClick?: (value: any) => void;
	functions: FunctionOBject;
}

export default function Keyboard({ handleClick, functions }: KeyBoardProps) {
	return (
		<div className="h-[368px] grid grid-rows-5 grid-cols-4 gap-2 rounded-xl bg-gray-900">
			{buttons.map((button) => (
				<CalcButton
					key={button.text}
					text={button.text}
					text_color={button.text_color}
					type={button.type}
					// handleValue={handleClick}
					functions={functions}
				/>
			))}
		</div>
	);
}
