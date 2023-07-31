//https://app.rocketseat.com.br/h/forum/react-js/84f0a634-c1b3-4a2b-89ca-fb7d66058b10

export interface ToastProps {
    title?: string;
    content: string;
}

export function Toast({title, content}:ToastProps) {
	return (
		<div>
			<h1>{title}</h1>
			<p>{content}</p>
		</div>
	);
}