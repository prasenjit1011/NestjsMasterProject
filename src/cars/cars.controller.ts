
import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query, ParseIntPipe, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CarDto } from './dto/createCar.dto';
import { UpdateCarDto } from './dto/updateCar.dto';
import { log } from 'console';

@Controller('cars')
export class CarsController {
    constructor(
        private readonly carService: CarsService
    ){}

    @Get('/')
    async carList(){
        const cars = await this.carService.getCars();
        return JSON.stringify({'status':200, "msg":"Car List", cars:cars});
    }

    @Get(':id')
    async getCarsById(@Param('id', ParseIntPipe) id: number){
        const cars = await this.carService.getCarsById(id);
        return JSON.stringify({'status':200, "msg":"Car Details", cars:cars});
    }

    @Delete(':id')
    async deleteCarById(@Param('id', ParseIntPipe) id: number){
        const cars = await this.carService.deleteCarsById(id);
        return JSON.stringify({'status':200, "msg":"Car Delete", cars:cars});
    }

    @Post('/')
    async addCars(@Body(ValidationPipe) addCarDto: CarDto){
        const cars = await this.carService.addCar(addCarDto);
        return JSON.stringify(cars);
    }

    @Patch(':id')
    async updateCars(@Param('id', ParseIntPipe) id: number, @Body(ValidationPipe) updateCarDto: UpdateCarDto){
        const cars = await this.carService.updateCarsById(id, updateCarDto);
        return JSON.stringify(cars);
    }

    @Put(':id')
    async updateCarByCond(@Param('id', ParseIntPipe) id: number, @Body(ValidationPipe) updateCarDto: UpdateCarDto){

        log('------updateCarByCond------')
        const cars = await this.carService.updateCarByCond(id, updateCarDto);
        return JSON.stringify(cars);
    }



}
