import { auth } from '@/lib/auth/config';
import { getFiles, getJsonRecords } from '@/lib/database';
import { NextResponse } from 'next/server';

export async function GET(
	request: Request,
	{ params }: { params: { slug: string } },
) {
	const session = await auth();

	const { data, error } = await getFiles(session?.user?.email as string);

	if (error) {
		return NextResponse.json(error, { status: 400 });
	}

	// Prettify the JSON data with 4 spaces indentation
	const prettifiedData = JSON.stringify(data, null, 4);
	return NextResponse.json(data, { status: 200 });
}
