### Important Command List

npm i -g nestjs/cli

nest new projectname

npm run start:dev

nest g module users

nest g controller users

nest g service users

npm i @nestjs/mapped-types -D

npm i class-validator class-transformer

npm i prisma -D

npx prisma init
npx prisma migrate dev -name init
## push
npx prisma migrate dev --name name_change
nest g module database
nest g service database
nest g resource employees

npm i @nestjs/throttler

postgresql://neondb_owner:ysY6GO7HKcBl@ep-withered-frost-a5etb539.us-east-2.aws.neon.tech/neondb?sslmode=require

npm i --save @nestjs/typeorm typeorm mysql2
npm i cookie-parser
npm i -D @types/cookie-parser


npm i --save @nestjs/typeorm typeorm pg

npm i @nestjs/graphql @nestjs/apollo graphql apollo-server-express

ts-morph
rxjs
reflect-metadata
platform


Repo :
https://www.youtube.com/watch?v=YXQr2LhYm0c

https://www.youtube.com/watch?v=rDOZB1Wolb8
https://www.youtube.com/watch?v=dk9bk_U1u7E

Graphql NestJs: NestJs Graphql Database (NestJs Graphql Postgres)
https://www.youtube.com/watch?v=ETnTvvFFLgk




http://localhost:3000/graphql

1) Mobile List :
{
  mobiles{
    id
    title
    price
  }
}

----- getMobileById -----
{
  getMobileById(mobileId:3){
    id
    title
  }
}



2) Add Mobile :
mutation AddMobile($addMobileArgs:AddMobileArgs!){
  addMobile(addMobileArgs:$addMobileArgs)
}

{
  "addMobileArgs": {
    "title": "Vivo",
    "price": 4521
  }
}



3) Update Mobile :
mutation UpdateMobile($updateMobileArgs: UpdateMobileArgs!){
  updateMobile(updateMobileArgs:$updateMobileArgs)
}

{
  "updateMobileArgs": {
    "id":1,
    "title": "NewVivo",
    "price": 44552
  }
}



4) Delete
mutation DeleteMobile($mobileId: Int!){
  deleteMobileById(mobileId:$mobileId)
}

{
  "mobileId":3
}


-----------------------------





















<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

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
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
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

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
