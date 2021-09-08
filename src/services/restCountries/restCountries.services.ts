import api from './api';
import { Country, CountryResponse } from '../../interfaces/country';


const RestCountriesServices = {
  getCountryByFullName: async function (name: string): Promise<Country> {
    const response: CountryResponse = await api.get(`/name/${name}?fullText=true`);
    return response.data[0];
  }
}

export default RestCountriesServices;
