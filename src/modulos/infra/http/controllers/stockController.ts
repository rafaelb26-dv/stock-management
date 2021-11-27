import { NextFunction, Request, Response } from "express";
import { injectable, container } from "tsyringe";
import ListStockService from "../../../services/ListStockService";
import StockEntity from "../../typeorm/entities/stockEntity";

@injectable()
export default class StockController {
    async listStock(
        request: Request,
        response: Response,
        next: NextFunction,
    ): Promise<StockEntity[] | void> {
        try {
            const listStockService = container.resolve(ListStockService)
            response.json(await listStockService.execute());
        } catch (error) {
            next(error);
        }
    }
}