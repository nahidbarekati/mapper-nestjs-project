import { registerAs } from '@nestjs/config';

export default registerAs('app', () => ({
  name: process.env.DOC_NAME || 'APIs Mapper & Auto Mapper',
  description: process.env.DOC_DESCRIPTION || 'Section for describe whole APIs',
  version: process.env.DOC_VERSION
    ? process.env.DOC_VERSION.endsWith('.0')
      ? process.env.DOC_VERSION
      : `${process.env.DOC_VERSION}.0`
    : '1.0',
  prefix: process.env.DOC_PREFIX || '/api',
  env: process.env.NODE_ENV || 'development',
  repoVersion: process.env.APP_VERSION,
  addTag: process.env.DOC_ADD_TAG || "API's MAPPER",

  port: parseInt(process.env.PORT) || 3000,
}));
