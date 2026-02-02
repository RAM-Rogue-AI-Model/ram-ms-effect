import { Request, Response } from 'express';

import { EffectService } from '../services/effectService';
import { CreateEffectInput } from '../types/effectInput';
import { isStatName } from '../utils/typeValid';

class EffectController {
  service: EffectService;

  constructor(service: EffectService) {
    this.service = service;
  }
  async create(req: Request, res: Response) {
    try {
      const body = req.body as Partial<CreateEffectInput>;
      if (
        !body.stat_name ||
        !body.count ||
        !body.duration ||
        !body.modificator
      ) {
        return res.status(400).json({ error: 'Missing required fields' });
      }

      if (!isStatName(body.stat_name)) {
        return res.status(400).json({ error: 'Invalid stat_name' });
      }
      const payload: CreateEffectInput = body as CreateEffectInput;
      const effect = await this.service.create(payload);
      res.status(201).json(effect);
    } catch (error) {
      console.error(error);
      res.status(400);
    }
  }

  async getById(req: Request, res: Response) {
    const id: string = req.params.id as string;
    if (!id) {
      return res.status(400).json({ error: 'Missing effect id' });
    }
    const effet = await this.service.getById(id);
    if (!effet) {
      return res.status(404).json({ error: 'Item not found' });
    }
    res.json(effet);
  }

  async getAll(req: Request, res: Response) {
    const effects = await this.service.list();
    res.json(effects);
  }

  async update(req: Request, res: Response) {
    const id: string = req.params.id as string;
    const body = req.body as Partial<CreateEffectInput>;
    if (!id) {
      return res.status(400).json({ error: 'Missing effect id' });
    }
    const effectExists = await this.service.getById(id);
    if (!effectExists) {
      return res.status(404).json({ error: 'Effect not found' });
    }
    if (!body.stat_name || !body.count || !body.duration || !body.modificator) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    const payload: CreateEffectInput = body as CreateEffectInput;
    const updatedEffect = await this.service.update(id, payload);
    res.json(updatedEffect);
  }

  async delete(req: Request, res: Response) {
    const id: string = req.params.id as string;
    if (!id) {
      return res.status(400).json({ error: 'Missing effect id' });
    }
    await this.service.delete(id);
    res.status(204).send();
  }
}

export { EffectController };
