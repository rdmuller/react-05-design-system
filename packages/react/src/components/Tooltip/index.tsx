// https://app.rocketseat.com.br/h/forum/react-js/ffaadcd4-2ef4-4b41-8d95-54bb17b8372a
// https://www.radix-ui.com/docs/primitives/components/tooltip
//https://app.rocketseat.com.br/h/forum/react-js/84f0a634-c1b3-4a2b-89ca-fb7d66058b10

import { ElementRef, ReactNode, forwardRef } from "react";
import * as RadixToolTip from "@radix-ui/react-tooltip";
import { tooltipContentStyle } from "./styles.css";

export type TooltipProps = {
	children?: ReactNode,
	content: string
}

//export function Tooltip({children, content}: TooltipProps) {
export const Tooltip = forwardRef<ElementRef<"div">, TooltipProps>(
	({content, children}:TooltipProps, ref) => {
		return (
			<RadixToolTip.Provider>
				<RadixToolTip.Root>
					<RadixToolTip.Trigger asChild>
						{children}
					</RadixToolTip.Trigger>
					<RadixToolTip.Content ref={ref} sideOffset={5} className={tooltipContentStyle}>
						{content}
						<RadixToolTip.Arrow />
					</RadixToolTip.Content>
				</RadixToolTip.Root>
			</RadixToolTip.Provider>
		);
	});

Tooltip.displayName = "Tooltip";