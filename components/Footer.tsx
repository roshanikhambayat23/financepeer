import React from 'react';

const Footer = () => {
	return (
		<footer className="p-4">
			<div className="container mx-auto text-center">
				<p className="text-zinc-500">
					&copy; {new Date().getFullYear()} JSONify{' '}
				</p>
			</div>
		</footer>
	);
};

export default Footer;
