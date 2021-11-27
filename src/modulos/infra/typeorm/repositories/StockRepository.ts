import {injectable} from "tsyringe";
import {getRepository, Repository} from "typeorm";
import StockEntity from "../entities/stockEntity";
import IStockRepository from "../../../repositories/IStockRepository";

@injectable()
export default class StockRepository implements IStockRepository {
    private repository: Repository<StockEntity>
    constructor() {
        this.repository = getRepository(StockEntity);
    }

    find() {
        return this.repository.find();
    }

    create(data: StockEntity): Promise<StockEntity> {
        return this.repository.save(data);
    }
}