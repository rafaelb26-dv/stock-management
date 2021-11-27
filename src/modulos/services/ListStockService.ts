import {inject, injectable} from 'tsyringe';
import IStockRepository from "../repositories/IStockRepository";
import StockEntity from "../infra/typeorm/entities/stockEntity";
import StockRepository from '../infra/typeorm/repositories/StockRepository';
import IStockDTO from '../DTO/IStockDTO';


@injectable()
export default class ListStockService {

    constructor(
    @inject(StockRepository)
    private StockRepository: IStockRepository,
    ) {}

    public async execute(): Promise<IStockDTO[] | []> {
        return await this.StockRepository.find();
    }

}

