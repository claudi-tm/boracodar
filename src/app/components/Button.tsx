interface ButtonProps {
    url: string;
    text: string;
}


export default function Button({ url, text }: ButtonProps) {
    return (
		<a
            href={ url }
			className="bg-violet-700 p-3 w-24 text-center rounded-md hover:bg-opacity-50 hover:transform duration-500"
		>
			{" "}
            { text }
		</a>
	);
}