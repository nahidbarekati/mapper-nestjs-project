
[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest
  
  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Mapper

auto Mapper

[automapper](https://automapperts.netlify.app/docs/getting-started/overview)



## file structure Mapper in nestjs 
```
├── nest-cli.json
├── package.json
├── package-lock.json
├── README.md
├── src
│   ├── app.module.ts
│   ├── common
│   │   ├── exceptions
│   │   │   ├── exception.base.ts
│   │   │   ├── exception.codes.ts
│   │   │   └── index.ts
│   │   ├── helpers
│   │   │   ├── Converters.ts
│   │   │   └── index.ts
│   │   └── mappings
│   │       ├── auto_mapper
│   │       │   └── user.profile.ts
│   │       └── user.ts
│   ├── config
│   │   ├── app.config.ts
│   │   ├── database.config.ts
│   │   ├── port.config.ts
│   │   ├── rate.config.ts
│   │   └── routes.config.ts
│   ├── main.ts
│   ├── modules
│   │   ├── api-mapper
│   │   │   ├── api-mapper.controller.ts
│   │   │   ├── api-mapper.module.ts
│   │   │   ├── api-mapper.service.ts
│   │   │   ├── auto_mapper_dto
│   │   │   │   ├── address.dto.ts
│   │   │   │   ├── index.ts
│   │   │   │   └── user.dto.ts
│   │   │   ├── entities
│   │   │   │   ├── auto_mapper_entity
│   │   │   │   │   ├── index.ts
│   │   │   │   │   └── user.entity.ts
│   │   │   │   └── mapper_a_entity
│   │   │   │       └── user-mapper.entity.ts
│   │   │   ├── error.message.ts
│   │   │   ├── repository
│   │   │   │   └── user.repository.ts
│   │   │   └── response_dto
│   │   │       ├── address.response.dto.ts
│   │   │       ├── index.ts
│   │   │       └── user.response.dto.ts
│   │   └── health
│   │       ├── health.controller.ts
│   │       └── health.module.ts
│   └── swagger.ts
├── tsconfig.build.json
└── tsconfig.json
```
## Stay in touch

- Author - Nahid barekati

