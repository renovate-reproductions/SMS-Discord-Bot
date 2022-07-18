import '#utils/setup';
import { envParseString } from '@skyra/env-utilities';
import { registerCommands } from '#utils/register-commands';
import { Client } from '@skyra/http-framework';

const client = new Client({
	discordPublicKey: envParseString('DISCORD_PUBLIC_KEY')
});

await client.load();

if (process.env.NODE_ENV === 'development') client.addListener('error', (error: unknown) => console.error(error));

await registerCommands();

await client.listen({
	port: Number(process.env.PORT) || 3000,
	address: '::'
});

console.log(`client listening on [::]:${process.env.PORT || 3000}`);