import type { BooleanString } from '@skyra/env-utilities';

declare module '@skyra/env-utilities' {
	interface Env {
		DISCORD_CLIENT_ID: string;
		DISCORD_APPLICATION_SECRET: string;
		DISCORD_PUBLIC_KEY: string;
		DOTENV_DEBUG_ENABLED: BooleanString;
		FOOTER_MESSAGE: string;
		NODE_ENV: 'test' | 'development' | 'production';
	}
}