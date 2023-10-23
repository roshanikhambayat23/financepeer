import GoogleSignInButton from '@/components/GoogleSignInButton';
import { auth } from '@/lib/auth/config';
import { getFiles } from '@/lib/database';
import { Button } from '@nextui-org/react';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react';

const page = async () => {
	const session = await auth();

	if (!session || !session.user) {
		redirect('/');
	}

	const { data, error } = await getFiles(session?.user?.email as string);

	return (
		<div className="flex-grow">
			{error ? <>{error}</> : null}

			<div className=" mt-10 mx-[200px] flex flex-col items-start justify-start">
				<h1 className="text-3xl font-bold my-10">Saved files.</h1>
				{data && data.length <= 0 ? (
					<span>No Saved Files</span>
				) : (
					data &&
					data.map((el, _) => {
						return (
							<div key={el.id} className=" w-full">
								<div className="tracking-wider my-2 flex space-x-3">
									<span className="font-semibold ">
										{_ + 1})
									</span>
									<Link
										href={`/saved/${el.id}`}
										className="hover:text-blue-500"
										title={`/saved/${el.id}`}
									>
										{el.fileName}
									</Link>
								</div>
								<div className="divider"></div>
							</div>
						);
					})
				)}
			</div>
		</div>
	);
};

export default page;
