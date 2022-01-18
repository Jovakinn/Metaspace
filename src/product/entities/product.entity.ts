import {BaseEntity, Column, PrimaryGeneratedColumn} from "typeorm";

export class Product extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    price: string;
}
