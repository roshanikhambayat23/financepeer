'use server';

import prisma from '@/lib/prisma';
import { File, JsonRecord } from '@prisma/client';
import { revalidatePath } from 'next/cache';

// handle file selection
export const handleFileSelect = async (
	fileData: Omit<File, 'id'>,
	jsonData: JsonRecord[],
	parseError: string,
) => {
	const file = await prisma.file.create({
		data: {
			fileName: fileData.fileName,
			email: fileData.email,
		},
		include: {
			jsonRecords: true,
		},
	});

	const jsonRecord = await prisma.jsonRecord.createMany({
		data: jsonData.map((record) => ({
			id: `${record.id}`,
			userId: `${record.userId}`,
			title: record.title,
			body: record.body,
			fileId: file.id,
		})),
	});

	console.log('jsonRecord => ', jsonRecord);

	revalidatePath('/');
};
