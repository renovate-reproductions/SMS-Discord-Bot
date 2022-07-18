import os from 'node:os';

export const FailPrefix = `I am sorry, but` as const;
export const embedColor = 0x00ff00;
export const FetchUserAgent = `VUW SMS Discord Bot (node-fetch) ${os.platform()}/${os.release()}`;
