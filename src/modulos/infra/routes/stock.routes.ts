import {Router} from 'express';
import stockController from "../controllers/stockController";

const stockModule = Router();
const stockController = new stockController();

stockModule.get('', stockController.listExample)

export default stockModule;