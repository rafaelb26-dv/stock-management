
import {Column,Entity,PrimaryGeneratedColumn} from "typeorm";
import IProductDTO from "../../../DTO/IProductDTO";



@Entity('product')
export default class ProductEntity implements IProductDTO {
    @PrimaryGeneratedColumn({name: 'id_general_product'})
    id?:number;

    @Column({name:'quantity'})
    quantity: number;

    @Column({name:'description'})
    description: string
}
