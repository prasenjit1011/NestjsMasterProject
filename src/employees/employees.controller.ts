import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Ip, ValidationPipe } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { Prisma, Role } from '@prisma/client';
import { Throttle, SkipThrottle } from '@nestjs/throttler'
//import { MyLoggerService } from 'src/my-logger/my-logger.service';


import {BadRequestException, Req, Res, UnauthorizedException} from '@nestjs/common';
//import {AppService} from './app.service';
import * as bcrypt from 'bcrypt';
import {JwtService} from "@nestjs/jwt";
import {Response, Request} from 'express';
import { log } from 'console';
import { EmployeeDto } from './dto/employee.dto';


@SkipThrottle()
@Controller('employees')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService, private jwtService: JwtService) {  }
  //private readonly logger = new MyLoggerService(EmployeesController.name)
  
  @Post()
  create(@Body() createEmployeeDto: Prisma.EmployeeCreateInput) {
    return this.employeesService.create(createEmployeeDto);
  }

  @SkipThrottle({ default: false })
  @Get()
  findAll(@Ip() ip: string, @Query('role') role?: Role) {
    //this.logger.log(`Request for ALL Employees\t${ip}`, EmployeesController.name)
    return this.employeesService.findAll(role);
  }

  @Throttle({ short: { ttl: 1000, limit: 1 }})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.employeesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEmployeeDto: Prisma.EmployeeUpdateInput) {
    return this.employeesService.update(+id, updateEmployeeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.employeesService.remove(+id);
  }


  @Post('register')
  async register(@Body(ValidationPipe) createEmployeeDto: Prisma.EmployeeCreateInput) 
  {
    createEmployeeDto.password = await bcrypt.hash(createEmployeeDto.password, 12);
    
    //log('----here-----------', name, email, role, password);
    //log(createEmployeeDto.password, ' -- ');
    //log(createEmployeeDto)
    //return JSON.stringify({'status':200, "msg":"Employee registration"});

    const user = await this.employeesService.createEmployee(createEmployeeDto);
    delete user.password;
    return user;
  }

  @Post('login')
  async login(
      @Body('email') email: string,
      @Body('password') password: string,
      @Res({passthrough: true}) response: Response
  ) {
      const user = await this.employeesService.findOneEmployee({email});

      if (!user) {
          throw new BadRequestException('invalid credentials');
      }

      if (!await bcrypt.compare(password, user.password)) {
          throw new BadRequestException('invalid credentials');
      }

      const jwt = await this.jwtService.signAsync({id: user.id});

      response.cookie('jwt', jwt, {httpOnly: true});

      return {
          message: 'success'
      };
  }

  @Get('details')
  async user(@Req() request: Request) {
      try {
          const cookie = request.cookies['jwt'];

          const data = await this.jwtService.verifyAsync(cookie);

          if (!data) {
              throw new UnauthorizedException();
          }

          const user = await this.employeesService.findOneEmployee({id: data['id']});

          const {password, ...result} = user;

          return result;
      } catch (e) {
          throw new UnauthorizedException();
      }
  }

  @Post('logout')
  async logout(@Res({passthrough: true}) response: Response) {
      response.clearCookie('jwt');

      return {
          message: 'success'
      }
  }


}
