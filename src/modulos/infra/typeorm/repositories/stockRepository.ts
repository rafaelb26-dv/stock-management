import {injectable} from "tsyringe";
import {getRepository, Repository} from "typeorm";
import stockEntity from "../entities/stockEntity";
import IStockRepository from "../../../repositories/IStockRepository";

@injectable()
export default class stockRepository implements IStockRepository {
    private repository: Repository<stockEntity>
    constructor() {
        this.repository = getRepository(stockEntity);
    }

    find() {
        return this.repository.find();
    }

    create(data: stockEntity): Promise<stockEntity> {
        return this.repository.save(data);
    }
}