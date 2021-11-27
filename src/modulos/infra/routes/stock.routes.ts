import {Router} from 'express';
import StockController from '../http/controllers/stockController';


const stockModule = Router();
const stockController = new StockController();

stockModule.get('', stockController.listStock)

export default stockModule;