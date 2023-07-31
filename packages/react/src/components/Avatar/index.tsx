import * as AvatarContainer from "@radix-ui/react-avatar";
import * as style from "./styles.css";
import { User } from "phosphor-react";
import { ComponentProps, ElementRef, forwardRef } from "react";

export type AvatarProps = ComponentProps<typeof AvatarContainer.AvatarImage>

export const Avatar = forwardRef<ElementRef<"img">, AvatarProps>((props, ref) => {
	return (
		<AvatarContainer.Root className={style.avatarContainer}>
			<AvatarContainer.Image className={style.avatarImage} {...props} ref={ref} />

			<AvatarContainer.Fallback className={style.avatarFallback} delayMs={600}>
				<User />
			</AvatarContainer.Fallback>
		</AvatarContainer.Root>
	);
});

Avatar.displayName = "Avatar";