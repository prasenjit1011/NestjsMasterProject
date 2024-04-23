import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {User} from "./user.entity";
import {Repository} from "typeorm";

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User) private readonly userRepository: Repository<User>
    ) {
    }

    // async create(data: any): Promise<User> {
    //     return this.userRepository.save(data);
    // }

    async findOne(condition: any): Promise<User> {
        return this.userRepository.findOneBy(condition)
        return this.userRepository.findOneByOrFail(condition)
        return this.userRepository.findOneByOrFail({"id":2})
    }
}