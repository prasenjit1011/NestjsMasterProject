import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import { EmployeesService } from './employees.service';
import { EmployeesController } from './employees.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [
    DatabaseModule,
    JwtModule.register({
      secret: 'secret',
      signOptions: {expiresIn: '1d'}
    })
  ],
  controllers: [EmployeesController],
  providers: [EmployeesService],
})
export class EmployeesModule { }
