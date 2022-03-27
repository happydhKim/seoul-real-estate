import { rest } from 'msw';

export const handlers = () => {
  return [rest.get('/api/user', getUserInformation)];
};
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const getUserInformation: Parameters<typeof rest.get>[1] = (_, res, ctx) => {
  sleep(1000);
  return res(
    ctx.status(200),
    ctx.json({
      name: '김도현',
      age: 7,
    })
  );
};
