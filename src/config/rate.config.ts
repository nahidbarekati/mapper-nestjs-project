import { registerAs } from '@nestjs/config';

export default registerAs('rate', () => ({
  title: process.env.APP_TITLE || 'Mapper Api',
  rate_limit: parseInt(process.env.APP_RATE_LIMIT, 10) || 10,
  rate_ttl: parseInt(process.env.APP_RATE_TTL, 10) || 60,
}));
