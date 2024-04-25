import { IsEmail, IsEnum, IsNotEmpty, IsString } from "class-validator";

export class CarDto {
    id: number;

    @IsString()
    carcolor: string;
}