import express, { Router } from 'express';

import { EffectController } from '../controllers/effectController';

class EffectRouter {
  public router: Router;

  constructor(effectController: EffectController) {
    this.router = express.Router();

    this.router
      .route('/')
      .post(async (req, res) => {
        await effectController.create(req, res);
      })
      .get(async (req, res) => {
        await effectController.getAll(req, res);
      });

    this.router
      .route('/:id')
      .get(async (req, res) => {
        await effectController.getById(req, res);
      })
      .put(async (req, res) => {
        await effectController.update(req, res);
      })
      .delete(async (req, res) => {
        await effectController.delete(req, res);
      });
  }
}

export { EffectRouter };
