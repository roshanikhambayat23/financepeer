import prisma from '../prisma';

export const getFiles = async (email: string) => {
	console.log('getFiles email param => ', email);

	if (!email) {
		return {
			loginError: `You're not logged in. Login to see saved Files.`,
		};
	}
	try {
		const data = await prisma.file.findMany({
			where: { email },
		});
		return { data: data.reverse() };
	} catch (error) {
		return { error };
	}
};
