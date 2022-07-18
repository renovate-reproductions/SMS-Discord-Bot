import { embedColor } from '#constants/constants';
import { EmbedBuilder } from '@discordjs/builders';
import { envIsDefined, envParseString } from '@skyra/env-utilities';

/**
 * Creates a embed using the base template.
 *
 * @param author The author of the embed.
 * @param icon The icon of the embed.
 * @returns The embed.
 */
export function embedBase(author: string, icon?: string | undefined): EmbedBuilder {
	const embed = new EmbedBuilder() //
		.setColor(embedColor)
		.setAuthor({ name: author, iconURL: icon });

	// If a footer is defined, add it to the embed.
	if (envIsDefined('FOOTER_MESSAGE')) {
		embed.setFooter({ text: envParseString('FOOTER_MESSAGE') });
	}

	return embed;
}
