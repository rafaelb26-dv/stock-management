import {inject, injectable} from 'tsyringe';
import IStockRepository from "../repositories/IStockRepository";
import stockEntity from "../infra/typeorm/entities/stockEntity";
import stockRepository from '../infra/typeorm/repositories/stockRepository';
import stockDTO from '../DTO/stockDTO';


@injectable()
export default class ListStockService {
    static execute(): any {
        throw new Error("Method not implemented.");
    }
    constructor(
    @inject(stockRepository)
    private StockRepository: IStockRepository,
    ) {}

    public async execute(): Promise<stockDTO[] | []> {
        return await this.StockRepository.find();
    }

}

