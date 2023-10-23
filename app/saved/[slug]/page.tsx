import { getJsonRecords } from '@/lib/database';
import Link from 'next/link';
import React from 'react';

const page = async ({ params }: { params: { slug: string } }) => {
	const { data, error } = await getJsonRecords(params.slug);

	return (
		<div className="flex-grow p-10 ">
			{error ? <>{error}</> : null}

			<div className="mt-10 flex flex-col items-start justify-start">
				<h1 className="mx-28 text-3xl font-bold my-10">Saved files.</h1>
				{data &&
					data.map((el) => {
						return (
							<div
								key={el.Uid}
								className="mx-20 shadow-md rounded px-4"
							>
								<Link href={`/saved/${params.slug}/${el.id}`}>
									<h2 className="text-xl font-bold">
										#{el.id} - {el.title}
									</h2>
								</Link>
								<div className="divider"></div>
							</div>
						);
					})}
			</div>
		</div>
	);
};

export default page;
