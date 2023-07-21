import Keyboard from "./Keyboard";

interface ScreenProps {
    previous_output: string;
    current_output: string;
}

export default function Screen({previous_output, current_output}: ScreenProps) {
	return (
		<div className="h-[86px] text-right text-white flex flex-col gap-2 rounded-xl bg-gray-900">
			<span className="text-sm text-gray-600">
				{" "}
				{previous_output}
			</span>
			<div className="text-4xl h-full flex justify-between">
				<div className="text-gray-600">=</div>
                <div>{ current_output}</div>
			</div>
		</div>
	);
}
