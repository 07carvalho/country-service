import { Request, Response } from 'express';
import RestCountriesServices from '../services/restCountries/restCountries.services';
import { Country } from '../interfaces/country';

const CountriesController = {
  getCountryByName: async function(req: Request, res: Response): Promise<void> {
    const { name } = req.params;
    try {
      const response: Country = await RestCountriesServices.getCountryByFullName(name);
      res.status(200).send(response);
    } catch (e) {
      const response = e.response;
      res.status(response.status).send(response.data);
    }
  }
}

export default CountriesController;
