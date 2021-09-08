export interface Country {
  name: string;
  topLevelDomain: string[];
  alpha2Code: string;
  alpha3Code: string;
  callingCodes: string[];
  capital: string;
  altSpellings: string[];
  region: string;
  subregion: string;
  population: number;
  latlng: number[];
  demonym: string;
  area: number;
  gini: number;
  timezones: string[];
  borders: string[];
  nativeName: string;
  numericCode: string;
  currencies: string[];
  languages: string;
  translations: any;
  flag: string;
  regionalBlocs: string[];
  cioc: string;
}

export interface CountryResponse {
  data: Country[];
  status: number;
  statusText: string;
}
