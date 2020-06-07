import express from 'express';
import PointsController from './controller/PointsContorller';
import ItemsController from './controller/ItemsController';

const routes = express.Router();
const pointsContorller = new PointsController();
const itemsController = new ItemsController();


routes.get('/items', itemsController.index)

routes.post('/points', pointsContorller.create);
routes.get('/points/:id', pointsContorller.index);
routes.get('/points', pointsContorller.duff);

export default routes;