import IStockDTO from "../../../DTO/IStockDTO";
import {Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";
import ProductEntity from "./productEntity";
import CompanyEntity from "./companyEntity";



@Entity('general_stock')
export default class StockEntity implements IStockDTO {
    @PrimaryGeneratedColumn({name: 'id_general_stock'})
    id?:number;

    @OneToOne(()=> ProductEntity)
    @JoinColumn({name:'id_general_product'})
    product: ProductEntity;

    @ManyToOne(()=> CompanyEntity)
    @JoinColumn({name:'id_general_company'})
    company: CompanyEntity;

    @Column({name:'description'})
    description: string
}
