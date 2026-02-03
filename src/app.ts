import 'dotenv/config';

import fs from 'node:fs';

import express from 'express';
import swaggerUi from 'swagger-ui-express';
import * as YAML from 'yaml';

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

const file = fs.readFileSync('./openapi.yml', 'utf8');
const swaggerDocument = YAML.parse(file) as object;

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on http://localhost:${port}`);
  console.log(`docs available at http://localhost:${port}/docs`);
});
