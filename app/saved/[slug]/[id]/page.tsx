import { getJsonRecords, getJsonRecordsById } from '@/lib/database';
import Link from 'next/link';
import React from 'react';

const page = async ({ params }: { params: { slug: string; id: string } }) => {
	const { data, error } = await getJsonRecordsById(params.slug, params.id);

	const { Uid, fileId, ...jsonData } = data!;
	return (
		<div className="flex-grow  p-10 ">
			{error ? <>{error}</> : null}

			<div className="mx-20">
				<div className="flex justify-between items-baseline my-4">
					<h1 className="font-bold text-3xl">
						Data in well structured format.
					</h1>
					<Link
						href={`/saved/${params.slug}/${params.id}/json`}
						className="text-sm"
					>
						view json data
					</Link>
				</div>
				{data && (
					<div className="bg-zinc-900 shadow-md rounded p-8 mb-4">
						<div key={data.Uid} className="mb-4">
							<h2 className="text-xl font-bold">{data.title}</h2>
							<p className="text-zinc-500 mb-2">ID: {data.id}</p>
							<p className="text-zinc-500 mb-2">
								User ID: {data.userId}
							</p>
							<p className="text-zinc-500 mb-2">
								Body: {data.body}
							</p>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default page;
