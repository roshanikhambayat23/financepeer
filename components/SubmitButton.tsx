'use client';

import { Button } from '@nextui-org/react';
import { ComponentProps } from 'react';
import { useFormStatus } from 'react-dom';

type ButtonProps = ComponentProps<'button'> & { title?: string };

export function SubmitButton({ title = 'Submit', ...props }: ButtonProps) {
	// const { pending } = useFormStatus();

	return (
		<Button type="submit" variant="ghost" {...props}>
			{title}
		</Button>
	);
}
