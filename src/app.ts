import 'dotenv/config';

import express from 'express';

import { EffectController } from './controllers/effectController';
import { EffectRouter } from './routes/effectRouter';
import { EffectService } from './services/effectService';
import { config } from './utils/config';

const app = express();
const port = config.PORT;

app.use(express.json());

const effectService = new EffectService();
const effectController = new EffectController(effectService);

app.use('/effect', new EffectRouter(effectController).router);
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on port ${port}`);
});
