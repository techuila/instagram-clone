import React, { FC, PropsWithChildren } from 'react';
import cx from 'classnames';

import styles from './styles.module.css';

export enum Variant {
	GHOST = 'ghost',
	PRIMARY = 'primary',
	SECONDARY = 'secondary'
}

export enum Color {
	PRIMARY = 'primary',
	SECONDARY = 'secondary'
}

type ButtonProps = {
	icon?: string;
	color?: Color;
	variant: Variant;
	fontWeight?: number;
};

function Button({
	icon,
	variant,
	children,
	color = Color.PRIMARY,
	fontWeight = 700
}: PropsWithChildren<ButtonProps>) {
	const variantStyle =
		variant === Variant.GHOST
			? styles[Variant.GHOST]
			: variant === Variant.PRIMARY
			? styles[Variant.PRIMARY]
			: styles[Variant.SECONDARY];

	return (
		<button
			className={cx(styles.buttonContainer, variantStyle, color)}
			style={{ fontWeight: fontWeight }}
		>
			{icon && <img src={icon} alt='Icon' />}
			{children}
		</button>
	);
}

export default Button;
