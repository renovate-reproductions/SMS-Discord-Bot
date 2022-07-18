import { envParseArray } from '@skyra/env-utilities';

export function getGuildIds(): readonly string[] {
	return envParseArray('COMMAND_GUILD_IDS', []) as readonly string[];
}
