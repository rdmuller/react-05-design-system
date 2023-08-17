import { ReactNode, createContext, useCallback, useContext, useState } from "react";
import { Toast, RadixToast, RadixToastProvider, RadixToastViewport } from "./index";

type ToastContextProps = (toast: Toast) => void;

export const ToastContext = createContext({} as ToastContextProps);

export function ToastProvider({ children }: {children: ReactNode}) {
	const [toasts, setToasts] = useState<Toast[]>([]);

	const addToast = useCallback(({ title, description, duration, status }: Omit<Toast, "id">) => {
		const toast = {
			id: Math.random().toString(36).slice(2),
			title,
			description,
			duration, 
			status
		} as Toast;
		setToasts((currentToasts) => [...currentToasts, toast]);
	}, []);

	return (
		<ToastContext.Provider value={addToast}>
			<RadixToastProvider>
				<RadixToastViewport />
				{toasts.map(toast => {
					return (
						<RadixToast key={toast.id}
							onOpenChange={(open) => {
								if (!open) {
									setToasts((currentToasts) => currentToasts.filter((t) => t.id !== toast.id));
								}
							}}
							onSwipeEnd={() => {
								setToasts((currentToasts) => currentToasts.filter((t) => t.id !== toast.id));
							}}
							{...toast} 
						/>
					);
				})}
				{children}
			</RadixToastProvider>
		</ToastContext.Provider>
	);
}

export function useToast():ToastContextProps {
	const context = useContext(ToastContext);

	if (!context) {
		throw new Error("useToast must be used within an ToastProvider");
	}
  
	return context;
}