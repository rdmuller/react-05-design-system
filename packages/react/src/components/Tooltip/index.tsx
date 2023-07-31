import { ElementRef, ReactNode, forwardRef } from "react";
import * as RadixToolTip from "@radix-ui/react-tooltip";
import { tooltipContentStyle } from "./styles.css";

export type TooltipProps = {
	children?: ReactNode,
	content: string
}

export const Tooltip = forwardRef<ElementRef<"div">, TooltipProps>(
	({content, children}:TooltipProps, ref) => {
		return (
			<RadixToolTip.Provider>
				<RadixToolTip.Root>
					<RadixToolTip.Trigger asChild>
						{children}
					</RadixToolTip.Trigger>
					<RadixToolTip.Content sideOffset={5} className={tooltipContentStyle} ref={ref}>
						{content}
						<RadixToolTip.Arrow />
					</RadixToolTip.Content>
				</RadixToolTip.Root>
			</RadixToolTip.Provider>
		);
	});

Tooltip.displayName = "Tooltip";