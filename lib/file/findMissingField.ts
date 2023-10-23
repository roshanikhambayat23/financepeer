import { JsonRecord } from '@prisma/client';

export const checkMissingFields = (record: JsonRecord): string[] => {
	const mandatoryFields = ['id', 'userId', 'title', 'body'];
	const missingFields: string[] = [];

	mandatoryFields.forEach((field) => {
		if (!(field in record)) {
			missingFields.push(field);
		}
	});

	return missingFields;
};
