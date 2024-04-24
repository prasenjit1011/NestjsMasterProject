import { Body, Controller, Delete, Get, Param, Patch, Post, Query, ParseIntPipe, ValidationPipe } from '@nestjs/common';
import { request } from 'http';

import { UsersService } from './users.service';
import { log } from 'console';

@Controller('users')
export class UsersController {
    constructor(
        private readonly userService: UsersService
    ){}

    @Get('/')
    async user(){
        const user = await this.userService.findOne({id: 10});
        if(user){
            return user;
        }
        else{

            return JSON.stringify({'status':200, "msg":"User not found"});
        }
    }

    @Get('/:id')
    async userdetails(){
        const user = await this.userService.findOne({id: id});
        if(user){
            return user;
        }
        else{

            return JSON.stringify({'status':200, "msg":"User not found"});
        }
    }



/*
    @Get('user')
    async user(@Req() request: Request) {
        try {
            const cookie = request.cookies['jwt'];

            const data = await this.jwtService.verifyAsync(cookie);

            if (!data) {
                throw new UnauthorizedException();
            }

            const user = await this.appService.findOne({id: data['id']});

            const {password, ...result} = user;

            return result;
        } catch (e) {
            throw new UnauthorizedException();
        }
    }

*/
    
}
