import { getJsonRecords } from '@/lib/database';
import { NextResponse } from 'next/server';

export async function GET(
	request: Request,
	{ params }: { params: { slug: string } },
) {
	const { slug } = params;

	const { data, error } = await getJsonRecords(slug);

	if (error) {
		return NextResponse.json(error, { status: 400 });
	}

	return NextResponse.json(data, { status: 200 });
}
