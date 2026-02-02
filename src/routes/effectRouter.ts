import express, { Router } from 'express';

import { EffectController } from '../controllers/effectController';
import { authenticate } from '../utils/auth';

class EffectRouter {
  public router: Router;

  constructor(effectController: EffectController) {
    this.router = express.Router();

    this.router
      .route('/')
      .post(authenticate, async (req, res) => {
        await effectController.create(req, res);
      })
      .get(authenticate, async (req, res) => {
        await effectController.getAll(req, res);
      });

    this.router
      .route('/:id')
      .get(authenticate, async (req, res) => {
        await effectController.getById(req, res);
      })
      .put(authenticate, async (req, res) => {
        await effectController.update(req, res);
      })
      .delete(authenticate, async (req, res) => {
        await effectController.delete(req, res);
      });
  }
}

export { EffectRouter };
