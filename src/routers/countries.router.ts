import { Router } from 'express';
import CountriesController from '../controllers/contries';

const router = Router();

router.get('/name/:name', CountriesController.getCountryByName)

export default router;
