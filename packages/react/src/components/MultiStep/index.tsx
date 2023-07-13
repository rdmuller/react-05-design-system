import { Text } from "../Text";
import { multiStepContainerStyle, textMultiStepStyle } from "./styles.css";

export interface MultiStepProps {
    size: number,
    currentStep?: number,
}

export function MultiStep({ size, currentStep }: MultiStepProps) {
	return (
		<div className={multiStepContainerStyle}>
			<Text className={textMultiStepStyle}>Passo {currentStep ? currentStep : 1} de {size}</Text>
		</div>
	);
}