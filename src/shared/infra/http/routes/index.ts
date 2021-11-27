import { Router } from "express";
import stockModule from "../../../../modulos/infra/routes/stock.routes";


const mainRouter = Router();

mainRouter.use('/example', stockModule);

export default mainRouter;
