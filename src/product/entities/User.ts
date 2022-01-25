import {BaseEntity, Column, PrimaryGeneratedColumn} from "typeorm";

export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    readonly id: string;

    @Column()
    name: string;

    @Column()
    surname: string;

    @Column()
    email: string;
}
