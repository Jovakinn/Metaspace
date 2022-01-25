import {EntityRepository, Repository} from "typeorm";
import {UserDto} from "../dto/user.dto";
import {User} from "../entities/user.entity";

@EntityRepository(User)
export class UserRepository extends Repository<User> {
    public async createUser(userDTO: UserDto): Promise<User> {
        const {name, surname, email} = userDTO;
        const user = new User();

        user.name = name;
        user.surname = surname;
        user.email = email;

        await user.save();
        return user;
    }

    public async editUser(userDTO: UserDto,
                             editedUser: User): Promise<User> {
        const {name, surname, email} = userDTO;

        editedUser.name = name;
        editedUser.surname = surname;
        editedUser.email = email;

        await editedUser.save();
        return editedUser;
    }
}
