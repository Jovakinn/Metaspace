import {Body, Controller, Delete, Get, Param, Patch, Post, Render} from "@nestjs/common";
import {UserService} from "../services/user.service";
import {UserDto} from "../dto/user.dto";
import {User} from "../entities/user.entity";

@Controller('user')
export class UserController {

    constructor(private userService: UserService) {}

    @Post('create')
    public async createUser(@Body() userDTO: UserDto): Promise<User> {
        return await this.userService.createUser(userDTO);
    }

    @Get('all')
    public async getUsers(): Promise<User[]> {
        return await this.userService.getUsers();
    }

    @Get('/:userId')
    public async getProduct(@Param('userId') userId: number): Promise<User> {
        return await this.userService.getUser(userId);
    }

    @Patch('/edit/:userId')
    public async editProduct(@Body() userDTO: UserDto,
                             @Param('userId') userId): Promise<User> {
        return await this.userService.editUser(userId, userDTO);
    }


    @Delete('/delete/:userId')
    public async deleteProduct(@Param('userId') userId: number): Promise<void> {
        await this.userService.deleteUser(userId);
    }
}
