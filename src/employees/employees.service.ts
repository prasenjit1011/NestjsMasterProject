import { Injectable } from '@nestjs/common';
import { Prisma, Role } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

// import {InjectRepository} from "@nestjs/typeorm";
// import {User} from "./user.entity";
// import {Repository} from "typeorm";



@Injectable()
export class EmployeesService {
  constructor(private readonly databaseService: DatabaseService) { }

  async create(createEmployeeDto: Prisma.EmployeeCreateInput) {
    return this.databaseService.employee.create({
      data: createEmployeeDto
    })
  }


  async find(where) {
    
      return this.databaseService.employee.findFirst({
        where: where
      });
    
  }
  
  async findAll(role?: Role) {
    if (role) {
      return this.databaseService.employee.findMany({
        where: {
          role,
        }
      })
    }
    return this.databaseService.employee.findMany()
  }

  async findOne(id: number) {
    return this.databaseService.employee.findUnique({
      where: {
        id,
      }
    })
  }

  async update(id: number, updateEmployeeDto: Prisma.EmployeeUpdateInput) {
    return this.databaseService.employee.update({
      where: {
        id,
      },
      data: updateEmployeeDto,
    })
  }

  async remove(id: number) {
    return this.databaseService.employee.delete({
      where: {
        id,
      }
    })
  }

  // constructor(
  //   @InjectRepository(User) private readonly userRepository: Repository<User>
  // ) {
  // }

  async createEmployee(createEmployeeDto: Prisma.EmployeeCreateInput): Promise<any> {
      return this.databaseService.employee.create({data:createEmployeeDto});
  }

  async findOneEmployee(condition: any): Promise<any> {
      return this.databaseService.employee.findMany(condition);
  }



}