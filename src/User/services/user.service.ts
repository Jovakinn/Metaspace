import {Injectable, NotFoundException} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {UserRepository} from "../repository/user.repository";
import {UserDto} from "../dto/user.dto";
import {User} from "../entities/user.entity";

@Injectable()
export class UserService {

    constructor
    (@InjectRepository(UserRepository)
     private userRepository: UserRepository) {}

    public async createUser(userDTO: UserDto): Promise<User> {
        return await this.userRepository.createUser(userDTO);
    }

    public async getUsers(): Promise<User[]> {
        return await this.userRepository.find();
    }

    public async getUser(userId: number): Promise<User> {
        const foundUser = await this.userRepository.findOne(userId);
        if (!foundUser) {
            throw new NotFoundException(`User ${userId} does not exist`);
        }
        return foundUser;
    }

    public async editUser(userId: number, userDTO: UserDto): Promise<User> {
        const foundUser = await this.userRepository.findOne(userId);
        if (!foundUser) {
            throw new NotFoundException(`User ${userId} does not exist`);
        }
        return this.userRepository.editUser(userDTO, foundUser);
    }

    public async deleteUser(userId: number) : Promise<void> {
        await this.userRepository.delete(userId);
    }
}
