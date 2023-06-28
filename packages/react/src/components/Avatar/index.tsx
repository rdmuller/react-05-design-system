import * as AvatarContainer from "@radix-ui/react-avatar";
import * as style from "./styles.css";
import { User } from "phosphor-react";
import { ComponentProps } from "react";

export type AvatarProps = ComponentProps<typeof AvatarContainer.AvatarImage>

export function Avatar(props: AvatarProps) {
	return (
		<AvatarContainer.Root className={style.avatarContainer}>
			<AvatarContainer.Image className={style.avatarImage} {...props} />

			<AvatarContainer.Fallback className={style.avatarFallback} delayMs={600}>
				<User />
			</AvatarContainer.Fallback>
		</AvatarContainer.Root>
	);
}