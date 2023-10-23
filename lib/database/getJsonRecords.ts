import prisma from '../prisma';

export const getJsonRecords = async (id: string) => {
	try {
		const data = await prisma.jsonRecord.findMany({
			where: { fileId: id },
		});
		return { data };
	} catch (error) {
		return { error };
	}
};

export const getJsonRecordsById = async (slug: string, id: string) => {
	try {
		const data = await prisma.jsonRecord.findFirst({
			where: {
				fileId: slug,
				id: id,
			},
		});
		return { data };
	} catch (error) {
		return { error };
	}
};
