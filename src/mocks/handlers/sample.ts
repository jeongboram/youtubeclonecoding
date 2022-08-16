import { rest } from 'msw';

export const getSamples1_1 = rest.get('/sample1_1', (req, res, ctx) => {
	return res(
		ctx.json([
			{
				name: 'JB',
				email: 'pink0913@nate.com',
			},
		]),
	);
});

export const getSamples1_2 = rest.get('/sample1_2', (req, res, ctx) => {
	return res(
		ctx.json([
			{
				name: 'JB2',
				email: 'pink0913@nate.com',
			},
		]),
	);
});
