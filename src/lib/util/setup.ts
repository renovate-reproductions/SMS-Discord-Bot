import { setup } from '@skyra/env-utilities';

process.env.NODE_ENV ??= 'development';

// Set the path as the `.env` file besides the current module:
// NOTE: If not set, it defaults to dotenv's default, `path.resolve(process.cwd(), '.env')`.
setup(new URL('../../../.env', import.meta.url));