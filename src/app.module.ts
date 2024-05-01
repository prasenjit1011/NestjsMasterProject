import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';

import { AppController } from './app.controller';
import { AppService } from './app.service';
//import { UsersModule } from './users/users.module';
//import { User } from './users/user.entity';
import { DatabaseModule } from './database/database.module';
import { EmployeesModule } from './employees/employees.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CarsModule } from './cars/cars.module';

@Module({
  
  controllers: [AppController],
  providers: [AppService],
  imports: [
    // TypeOrmModule.forRoot({
    //   type: 'mysql',
    //   host: 'localhost',
    //   port: 3306,
    //   username: 'root',
    //   password: '',
    //   database: 'nestjs',
    //   entities: [User],
    //   synchronize: true,
    // }),
    // TypeOrmModule.forFeature([User]),
    JwtModule.register({
        secret: 'secret',
        signOptions: {expiresIn: '1d'}
    }),
    // UsersModule,
    MongooseModule.forRoot('mongodb+srv://tester:tester1234@cluster0.hlicuim.mongodb.net/Mydb?retryWrites=true&w=majority'),
    DatabaseModule,
    EmployeesModule,
    CarsModule
  ],
})
export class AppModule {}
