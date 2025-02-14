### Important Command List


#### Employee CRUD with PostgreSQL with Prisma

#### Car CRUD with Mongoose 

#### User CRUD with MySQL work in progress




npm i -g nestjs/cli

nest new projectname

npm run start:dev

nest g module users

nest g controller users

nest g service users

npm i @nestjs/mapped-types -D

npm i class-validator class-transformer
npm i --save @nestjs/mongoose mongoose
npm i prisma -D

npx prisma init
npx prisma migrate dev 
## -name init
## push, deploy

nest g module database


npx prisma migrate dev --name name_change
nest g module database
nest g service database
nest g resource employees


npm install -g dotenv-cli

dotenv -e .env.local -- npx prisma studio



enableCros
setglobalprefix('api')

npm i @nestjs/throttler

postgresql://neondb_owner:ysY6GO7HKcBl@ep-withered-frost-a5etb539.us-east-2.aws.neon.tech/neondb?sslmode=require

npm i --save @nestjs/typeorm typeorm mysql2
npm i cookie-parser
npm i -D @types/cookie-parser

npm install --save @nestjs/typeorm typeorm mysql2


#   Docker 
### Install WSL
wsl --install
wsl -l -v 

### Start Docker Desktop as Administrator
### CMD : Check docker status : docker --version
### CMD : Pull docker image : docker pull nginx ( ubuntu, centos )
### CMD : Run docker image : docker run nginx
### CMD : Run docker image in deattached mode : docker run -d nginx
### **  : It create docker container

### CMD : Running Container List    : docker ps / docker container ls -a
### CMD : Available Container List  : docker ps -a
### CMD : Restart Container : docker start/stop mynginx
### CMD : Remove Container  : docker remove mynginx
### CMD : Docker with port binding : 
### docker run -d --rm --name -p 8080:80  mynginx nginx

### CMD : Docker Log File : docker logs -f mynginx
### CMD : Container config check : docker inspect mynginx
### CMD : GoTo inside of container : docker exec -it mynginx bash
### CMD : docker run --name rpn-web-3 --cap-add=NET_ADMIN -it -net rpn-network -d httpd

### CMD : Ping to container with name ( != ip ) :  nslookup jenkins
### CMD : netstat -ntplu / -ntpl
### CMD : iptables-save 
### CMD : iptables-legacy-save
### CMD : docker run --name rpn-webserver -p 80:80 --net rpn-network -d httpd 
### CMD : docker container exec -it rpn-webserver /bin/bash
### CMD : What port are exposed publicly : docker port rpn-webserver 
### CMD : docker container ls | grep rpn-webserver
### CMD : docker build -t rpn-image:v1 .
### CMD : docker images | grep rpn-image


### Important
### Create container from ubuntu : docker run --name rpn-web -it ubuntu /bin/bash
### Create image from container (rpn-web), id f25290 , we can share image with other : docker container --author "Prasenjit" -m "myimg from rpn-web" f25290 rpn-myimg

### Container List : docker container ls -a
### Image List : docker images

### Create container from Global ubuntu : docker run --name rpn-web -it ubuntu /bin/bash
### Create container from Custom/Local rpn-myimg : docker run --name rpn-newweb -it myimg /bin/bash
### docker save -o /home/ubuntu/rpn-myimg.tar rpn-myimg

### Push image to docker hub: docker image tag rpn-myimg tester/rpn-myimg:v1
### Push image to docker hub: docker push tester/rpn-myimg:v1

### Docker compose
### Remove unused network : docker network prune
### docker-compose -v
### apt instal;l docker-compose


### docker-compose.yml : Start 
version: "v1"
services:
  rpn-web:
    image: httpd
    ports:
      -"8000:80"
    networks:
      -"rpn-network"
    volume:
      -"rpn-volume:/data"
  rpn-db:
    image: redis
    networks:
      -"rpn-network"
    volume:
      -"rpn-volume:/app"
networks:
  rpn-network: 
volumes:
  rpn-volume:
### docker-compose.yml : Completed
### CMD : Syntax check of .yml : docker-compose config
### CMD : Create container from multiple image(httpd, redis) of docker-compose.yml : docker-compose up -d
### CMD : docker-compose up -d / docker-compose down
### CMD : docker-compose up -d --scale rpn-db=5

### Network
### CMD : ifconfig / ip a s
### docker0 : eth0 : lo ?
### CMD : docker network inspect bridge 
### CMD : docker run --name rpn-web -d httpd
### CMD : docker run --name rpn-db -c MYSQL_ROOT_PASSWORD=rpnpwd -d mysql
### CMD : docker network inspect bridge 
### CMD : brctl show
### IPADDRESS

### CMD : docker network create rpn-bridge
### CMD : docker network inspect rpn-bridge
### CMD : docker network create --subnet 10.7.0.9/16 --gateway 10.7.7.7 rpn-network
### CMD : docker run --name rpn-web-new --net=rpn-network -d httpd
### CMD : docker run --name jenkins --net=rpn-network -d jenkins
### CMD : docker network inspect bridge rpn-network
### CMD : docker network connect bridge rpn-web-new
### CMD : nslookup jenkins
### CMD : cat /etc/resolv.conf
### CMD : netstat ntplu


### CMD : docker run --name rpn-web-3 --cap-add=NET_ADMIN -it --net rpn-network -d httpd
### CMD : *** tcp, udp, DNAT, SNAT ? : iptables-legacy-save
### CMD : Embedded DNS server


FROM ubuntu
MAINTAINER Prasenjit
RUN apt-get update
CMD ["Hello World", "CISPL"]
ENTRYPOINT ["New World", "CISPL"]
COPY index.html /tmp
ADD robots.txt /tmp
ADD http://test.com /my/path
WORKDIR /tmp
VOLUME /app
EXPOSE 80/tcp
EXPOSE 80/udp





schemas
import * as mongoose from "mongoose"
export const CarSchema = new mongoose.Schema({
  id:Number
  color:String
})



interfaces
car.interface.ts

import { Document } from 'mongoose'
export interface ICar extends Document{
  readonly id:Number
}





Admin Section
1. Auth Function
2. Category CRUD
3. Product CRUD


Frontend Section
1. Product Add To Cart
2. Stripe Payment Gateway
3. Stripe WebHook
4. 











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
