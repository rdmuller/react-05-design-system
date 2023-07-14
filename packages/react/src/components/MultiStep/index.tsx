import { assignInlineVars } from "@vanilla-extract/dynamic";
import { Text } from "../Text";
import { multiStepContainerStyle, stpesStyles, textMultiStepStyle, stepsSize, stepStyles } from "./styles.css";

export interface MultiStepProps {
    size: number,
    currentStep?: number,
}

export function MultiStep({ size, currentStep = 1 }: MultiStepProps) {
	return (
		<div className={multiStepContainerStyle}>

			<Text className={textMultiStepStyle}>
				Passo {currentStep ? currentStep : 1} de {size}
			</Text>

			<div className={stpesStyles} style={assignInlineVars({[stepsSize]: `${size}`})}>
				{Array.from({ length: size }, (_, i) => i + 1).map(step => {
					return (						
						<div key={step} className={stepStyles({ active: (currentStep >= step) })} />
					);
				})}
			</div>
		</div>
	);
}