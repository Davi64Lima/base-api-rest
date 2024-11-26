import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UserEntity } from "./user.entity";
import { CreateUserDto } from "./user.dto";

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(UserEntity) private userRepo: Repository<UserEntity>,
    ) { }

    async create(body: CreateUserDto) {
        return await this.userRepo.save(body);
    }


    async fetchAllUsers() {
        return await this.userRepo.find();
    }

    findAll(): string {
        return "This action returns all users";
    }
}