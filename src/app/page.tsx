import { table } from "console";
import Image from "next/image";
import Card from "./components/Card";

export default function Home() {
  return (
		<div className="h-screen">
			<table className=" border-separate border-spacing-10">
				<thead></thead>
				<tbody>
					<tr>
						<td>
							{
								<Card
									description="Foi desenvido uma calculadora. Com estados para os botões e animações, por exemplo, além de tornar a calculadora funcional. "
									title="#boraCodar uma calculadora"
									image_url="https://www.rocketseat.com.br/boracodar/_next/image?url=https%3A%2F%2Fmedia.graphassets.com%2Fw6IZjb6Tq2ml4Cm4HzHc&w=640&q=100"
								/>
							}
						</td>
					</tr>

				</tbody>
			</table>
		</div>
  );
}
