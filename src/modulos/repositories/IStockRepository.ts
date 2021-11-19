import stockDTO from "../DTO/stockDTO";

export default interface IStockRepository {
    create(data: stockDTO): Promise<stockDTO>;
    find(): Promise<stockDTO[]>;
}