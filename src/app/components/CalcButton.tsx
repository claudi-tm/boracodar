import { FunctionOBject } from "../calculator/page";

interface CalcButtonProps {
	text: string;
	text_color: string;
	type: string;
	handleValue?: (value: any) => void;
	functions: FunctionOBject;
}



function check(text:any, functions: FunctionOBject) {
	switch (text) {
		case "C":
			return functions.handleClear;
		case "+":
			return functions.handleOperator;
		case "/":
			return functions.handleOperator;
		case "X":
			return functions.handleOperator;
		case "-":
			return functions.handleOperator;
		case "=":
			return functions.handleResult;
		default:
			return functions.handleClick;
	}

}

export default function CalcButton({
	text,
	text_color,
	type,
	handleValue,
	functions,
}: CalcButtonProps) {
	return (
		<button
			onClick={
				check(text, functions)
			}
			value={text}
			className={`w-[3.5rem] h-[3.5rem] flex items-center justify-center rounded-full shadow-sm shadow-gray-950 ${
				type !== "operator"
					? "bg-gradient-to-b from-[#1b1a1a26] to-[#ffffff0d]"
					: "bg-violet-900"
			} hover:contrast-50  cursor-pointer ${
				type !== "operator"
					? "active:bg-violet-800 "
					: "active:bg-black"
			} duration-200  `}
			style={{ color: `${text_color === "" ? "white" : text_color}` }}
		>
			{text}
		</button>
	);
}
