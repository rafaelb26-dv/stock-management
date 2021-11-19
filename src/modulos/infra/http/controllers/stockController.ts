import { NextFunction } from "express";
import { injectable, container } from "tsyringe";
import ListStockService from "../../../services/ListStockService";
import stockEntity from "../../typeorm/entities/stockEntity";

@injectable()
export default class stockController {
    async listStock(
        request: Request,
        response: Response,
        next: NextFunction,
    ): Promise<stockEntity[] | void> {
        try {
            const listStockService = container.resolve(ListStockService)
            response.json(await ListStockService.execute());
        } catch (error) {
            next(error);
        }
    }
}