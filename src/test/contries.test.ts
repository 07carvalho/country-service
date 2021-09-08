import * as request from 'supertest';
import app from '../app';
import { CountryNotFound, MaltaCountry } from '../__fixtures__/countries';


describe('GET /api/v1/countries/name/malta', () => {
  test('should return 200 OK', () => {
    return request(app).get('/api/v1/countries/name/malta').then(response => {
      expect(response.statusCode).toBe(200);
      expect(response.body).toEqual(MaltaCountry);
    });
  });
  test('should return 404 NotFound', () => {
    return request(app).get('/api/v1/countries/name/bazl').then(response => {
      expect(response.statusCode).toBe(404);
      expect(response.body).toEqual(CountryNotFound);
    });
  });
});
