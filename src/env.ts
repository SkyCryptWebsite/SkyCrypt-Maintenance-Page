import { defineEnvVars } from "@sveltejs/kit/env";

const schema = (input: string | undefined) => input ?? "";

export const variables = defineEnvVars({
  PUBLIC_DISCORD_INVITE: { public: true, schema }
});
