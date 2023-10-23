'use client';

import React, { useState } from 'react';

const CopyButton = ({ data }: { data: string }) => {
	const [state, setState] = useState(false);

	const handleClick = () => {
		setState(true);
		navigator.clipboard.writeText(data);
		setTimeout(() => {
			setState(false);
		}, 1000);
	};

	return (
		<button onClick={handleClick} disabled={state}>
			{state ? 'Copied!' : 'Copy to Clipboard'}
		</button>
	);
};

export default CopyButton;
