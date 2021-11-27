import ICompanyDTO from "./ICompanyDTO";
import IProductDTO from "./IProductDTO";

export default interface IStockDTO {
    id?: number;
    description: string;
    product: IProductDTO;
    company: ICompanyDTO;
}