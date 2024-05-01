import { IsEmail, IsEnum, IsNotEmpty, IsString } from "class-validator";

export class EmployeeDto {
    
    @IsString()
    name: string;

    password: string;
    email: string;
    role: string;
}