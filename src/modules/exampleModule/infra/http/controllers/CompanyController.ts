import Company from "../../typeorm/entities/Company";
import {NextFunction, Request, Response} from "express";
import {container, inject, injectable} from "tsyringe";
import ListCompanyService from "../../../services/ListCompanyService";

@injectable()
export default class CompanyController {
    constructor(
        // @inject(ListCompanyService)
        // private listCompanyService?: ListCompanyService,
    ) {}

    async listCompany(
        request: Request,
        response: Response,
        next: NextFunction,
    ): Promise<Company[] | void> {
        try {
            const listCompanyService = container.resolve(ListCompanyService)
            response.json(await listCompanyService.execute());
        } catch (error) {
            next(error);
        }
    }
}