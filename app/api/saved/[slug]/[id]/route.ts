import { getJsonRecords, getJsonRecordsById } from '@/lib/database';
import { NextResponse } from 'next/server';

export async function GET(
	request: Request,
	{ params }: { params: { slug: string; id: string } },
) {
	const { slug, id } = params;

	const { data, error } = await getJsonRecordsById(slug, id);

	if (error) {
		return NextResponse.json(error, { status: 400 });
	}

	return NextResponse.json(data, { status: 200 });
}
