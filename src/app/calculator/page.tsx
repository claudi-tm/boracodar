"use client";
import { useState } from "react";
import Keyboard from "./components/Keyboard";
import Screen from "./components/Screen";
import { log } from "console";

export interface FunctionOBject {
	handleClick: (value: any) => void;
	handleClear: () => void;
	handleSum: () => void;
	handleOperator: (value: any) => void;
	handleResult: () => void;
}

export default function Calculator() {
	const [digit, setDigit] = useState("");
	const [operator, setOperator] = useState("");
	const [storedValue, setStoredValue] = useState("");
	const [previousOperand, setPreviousOperand] = useState("");
	const [isDone, setDone] = useState(false);

	const fucntions = {
		handleClick: (value: any) => {
			if (isDone) setDigit("");

			let input = value.target.value;
			setDigit(`${digit === "" ? input : digit + input}`);
		},

		handleClear: () => {
			setDigit("");
			setPreviousOperand("");
		},

		handleSum: () => {},

		handleResult: () => {
			let arg1 = Number.parseInt(storedValue);
			let arg2 = Number.parseInt(digit);
			let result = 0;
			switch (operator) {
				case "+":
					result = arg1 + arg2;
					setDigit(result.toString());
					setDone(true);

					setPreviousOperand(`${storedValue} + ${digit}`);

					break;
				case "-":
					result = arg1 - arg2;
					setDigit(result.toString());
					setPreviousOperand(`${storedValue} + ${digit}`);
					setDone(true);
					break;
				case "/":
					result = arg1 / arg2;
					setDigit(result.toString());
					setPreviousOperand(`${storedValue} / ${digit}`);
					setDone(true);
					break;
				case "X":
					result = arg1 * arg2;
					setDigit(result.toString());
					setPreviousOperand(`${storedValue} X ${digit}`);
					setDone(true);
					break;
				default:
					break;
			}
		},

		handleOperator: (value: any) => {
			let operator_input = value.target.value;
			setOperator(operator_input);
			setStoredValue(digit);
			setDigit("");
		},
	};

	return (
		<div className="h-screen bg-violet-500 p-5 flex items-center justify-center">
			<div className="h-[500px] w-[350px] shadow-xl shadow-gray-950  rounded-xl bg-gray-900">
				<div className="container p-8">
					<Screen
						previous_output={previousOperand}
						current_output={digit}
					/>
					<Keyboard functions={fucntions} />
				</div>
			</div>
		</div>
	);
}
