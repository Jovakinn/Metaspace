import { IsString } from "class-validator";

export class User {
    @IsString()
    name: string;

    @IsString()
    surname: string;

    @IsString()
    email: string;
}
