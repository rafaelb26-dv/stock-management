import { Router } from "express";
import exampleModule from "../../../../modules/exampleModule/infra/http/routes/example.routes";

const mainRouter = Router();

mainRouter.use('/exampleModule', exampleModule);

export default mainRouter;
