import { FreshContext } from "$fresh/server.ts";

export const handler = (_req: Request, _ctx: FreshContext): Response => {
  const body = {
    testText: 'This is test text 1.'
  };
  return new Response(null);
};
