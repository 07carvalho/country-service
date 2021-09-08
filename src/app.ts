import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as dotenv from 'dotenv';
import * as cors from 'cors';
import * as helmet from 'helmet';

dotenv.config();
import countriesRoutes from './routers/countries.router';

const app = express();
app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use('/api/v1/countries', countriesRoutes);

export default app;
