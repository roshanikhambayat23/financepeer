import { getJsonRecords, getJsonRecordsById } from '@/lib/database';
import React from 'react';
import CopyButton from './CopyButton';
import Link from 'next/link';

const page = async ({ params }: { params: { slug: string; id: string } }) => {
	const { data, error } = await getJsonRecordsById(params.slug, params.id);

	const { Uid, fileId, ...jsonData } = data!;
	return (
		<div className="flex-grow  p-10 ">
			{error ? <>{error}</> : null}
			<div className="flex justify-between items-center mb-4">
				<Link href={`/api/saved/${params.slug}/${params.id}`}>
					Get API route
				</Link>
				<CopyButton data={JSON.stringify(jsonData, null, 4)} />
			</div>
			<div className="shadow-md bg-zinc-950 rounded-md p-4 overflow-hidden">
				<pre className="whitespace-pre-wrap">
					{JSON.stringify(jsonData, null, 4)}
				</pre>
			</div>
		</div>
	);
};

export default page;
