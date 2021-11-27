
import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import ICompanyDTO from "../../../DTO/ICompanyDTO";



@Entity('company')
export default class CompanyEntity implements ICompanyDTO {
    @PrimaryGeneratedColumn({name: 'id_general_company'})
    id?:number;

    @Column({name:'description'})
    description: string
}
