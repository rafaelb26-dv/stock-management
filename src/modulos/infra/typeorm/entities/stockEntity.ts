import stockDTO from "../../../DTO/stockDTO";
import {Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";



@Entity('id_general_stock')
export default class stockEntity implements stockDTO {
    @PrimaryGeneratedColumn({name: 'id_general_stock'})
    id!: number;

    @Column()
    name!: string;

    @Column()
    id_general_company: number;

    @Column()
    id_general_stock:number;

    @Column()
    id_general_product: number;

    @Column()
    description: string



    @CreateDateColumn({
        name: "created_at",
    })
    createdAt!: Date;

    @UpdateDateColumn({
        name: "updated_at",
    })
    updatedAt!: Date;

    @DeleteDateColumn({
        name: "deleted_at",
    })
    deletedAt!: Date;
