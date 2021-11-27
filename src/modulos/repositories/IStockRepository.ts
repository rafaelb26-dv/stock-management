import IStockDTO from "../DTO/IStockDTO";

export default interface IStockRepository {
    create(data: IStockDTO): Promise<IStockDTO>;
    find(): Promise<IStockDTO[]>;
}