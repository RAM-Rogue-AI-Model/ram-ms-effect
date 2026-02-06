import express, { Router } from 'express';

import { EffectController } from '../controllers/effectController';
import { authenticate, requestDetails } from '../utils/auth';

class EffectRouter {
  public router: Router;

  constructor(effectController: EffectController) {
    this.router = express.Router();

    this.router
      .route('/')
      .post(requestDetails, authenticate, async (req, res) => {
        await effectController.create(req, res);
      })
      .get(requestDetails, authenticate, async (req, res) => {
        await effectController.getAll(req, res);
      });

    this.router
      .route('/:id')
      .get(requestDetails, authenticate, async (req, res) => {
        await effectController.getById(req, res);
      })
      .put(requestDetails, authenticate, async (req, res) => {
        await effectController.update(req, res);
      })
      .delete(requestDetails, authenticate, async (req, res) => {
        await effectController.delete(req, res);
      });
  }
}

export { EffectRouter };
