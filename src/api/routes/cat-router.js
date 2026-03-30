import {
  getCat,
  getCatById,
  postCat
} from '../controllers/cat-controller.js';

import express from 'express';

const catRouter = express.Router();

catRouter.route('/').get(getCat).post(postCat);

catRouter.route('/:id').get(getCatById);

export default catRouter;
