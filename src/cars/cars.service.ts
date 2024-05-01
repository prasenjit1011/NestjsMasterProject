import { Injectable, HttpException } from '@nestjs/common';

import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ICar } from './interfaces/car.interface';
import { CarDto } from './dto/createCar.dto';
import { UpdateCarDto } from './dto/updateCar.dto';
import { log } from 'console';

const carProjection = {
    __v:false,
    _id:false
}

@Injectable()
export class CarsService {
    constructor(@InjectModel('Car') private readonly carModel: Model<ICar>){}

    public async getCars():Promise<CarDto[]>{

        const cars = await this.carModel.find({}, carProjection).exec();
        if(!cars || !cars[0]){
            throw new HttpException('No cars are available!', 404);
        }

        return cars;
    }

    public async getCarsById(id: number):Promise<CarDto>{

        const cars = await this.carModel.findOne({id:id}, carProjection).exec();
        if(!cars){
            log(id);
            log(cars);
            throw new HttpException('Cars details not available!', 404);
        }
        
        return cars;
    }

    public async deleteCarsById(id: number):Promise<any>{

        const cars = await this.carModel.deleteOne({id}).exec();
        if(cars.deletedCount === 0){
            throw new HttpException('No cars are available!', 404);
        }
        
        return cars;
    }

    public async addCar(newcar:CarDto){
        
        const ncar = await new this.carModel(newcar);
        return ncar.save();
    }

    public async updateCarsById( id: number, updateCarDto: UpdateCarDto ):Promise<any>{
        
        const cars      = await this.carModel.findOne({id:id}).exec();
        if(!cars){
            throw new HttpException('Cars not found!', 404)
        }
        
        const status    = await cars.updateOne(updateCarDto);
        if(!status.acknowledged){
            throw new HttpException('Not updated', 404)
        }

        return cars;
    }


    public async updateCarByCond( id: number, updateCarDto: UpdateCarDto ):Promise<any>{
        
        const cars      = await this.carModel.find({id:id}).exec();
        if(!cars || !cars[0]){
            throw new HttpException('Cars not found!', 404)
        }
        
        const status    = await this.carModel.updateMany({id:id}, updateCarDto);
        if(!status.acknowledged){
            throw new HttpException('Not updated', 404)
        }

        const updCars   = await this.carModel.find({id:id}).exec();
        return updCars;
    }

}
