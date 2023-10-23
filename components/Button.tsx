'use client';

import {
	AnchorHTMLAttributes,
	ButtonHTMLAttributes,
	ComponentProps,
	ReactNode,
	Ref,
	forwardRef,
} from 'react';
import Link from 'next/link';
import clsx from 'clsx';

const baseStyles = {
	solid: 'inline-flex justify-center rounded-lg py-2 px-3 text-sm font-semibold outline-2 outline-offset-2 transition-colors',
	outline:
		'inline-flex justify-center rounded-lg border py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-sm outline-2 outline-offset-2 transition-colors',
};

const variantStyles: VariantStyles = {
	solid: {
		cyan: 'relative overflow-hidden bg-cyan-500 text-white before:absolute before:inset-0 active:before:bg-transparent hover:before:bg-white/10 active:bg-cyan-600 active:text-white/80 before:transition-colors',
		white: 'bg-white text-cyan-900 hover:bg-white/90 active:bg-white/90 active:text-cyan-900/70',
		gray: 'bg-gray-800 text-white hover:bg-gray-900 active:bg-gray-800 active:text-white/80',
	},
	outline: {
		gray: 'border-gray-300 text-gray-700 hover:border-gray-400 active:bg-gray-100 active:text-gray-700/80',
	},
};

interface VariantStyles {
	solid: {
		cyan: string;
		white: string;
		gray: string;
	};
	outline: {
		gray: string;
	};
}

interface ButtonProps extends ComponentProps<'button'> {
	variant?: keyof VariantStyles; // Define possible variants
	color?: keyof VariantStyles['solid'] | keyof VariantStyles['outline']; // Define possible colors
	className?: string;
	href?: string;
	children?: ReactNode;
}

// Define separate types for button and link props
type ButtonElementProps = ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>;
type LinkElementProps = ButtonProps & AnchorHTMLAttributes<HTMLAnchorElement>;

type ButtonRef = HTMLButtonElement | HTMLAnchorElement | null;

const Button = forwardRef<ButtonRef, ButtonProps>(function Button(
	{
		variant = 'solid',
		color = 'gray',
		className,
		href,
		...props
	}: ButtonProps,
	ref: Ref<ButtonRef>,
) {
	className = clsx(
		baseStyles[variant],
		variantStyles[variant][color],
		className,
	);

	return href ? (
		<Link
			ref={ref as Ref<HTMLAnchorElement>}
			href={href}
			className={className}
			{...(props as LinkElementProps)}
		/>
	) : (
		<button
			ref={ref as Ref<HTMLButtonElement>}
			className={className}
			{...(props as ButtonElementProps)}
		/>
	);
});

export default Button;
