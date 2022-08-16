import { rest } from 'msw';

export const getSamples2_1 = rest.get('/sample2_1', (req, res, ctx) => {
	return res(
		ctx.json([
			{
				name: 'JB',
				email: 'pink0913@nate.com',
			},
		]),
	);
});

export const getSamples2_2 = rest.get('/sample2_2', (req, res, ctx) => {
	return res(
		ctx.json([
			{
				name: 'JB2',
				email: 'pink0913@nate.com',
			},
		]),
	);
});
