import { CarDto } from "./createCar.dto"
import { PartialType } from "@nestjs/mapped-types"

export class UpdateCarDto extends PartialType(CarDto) { }