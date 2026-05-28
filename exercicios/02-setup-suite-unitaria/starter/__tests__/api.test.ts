// __tests__/api.test.ts
//
// HANDS-ON (camada data) — testar a lógica pura do módulo de API.
//
// isTokenError(error) classifica se um erro é de autenticação:
//   - true  se error.isTokenError === true
//   - true  se error.response.status === 401
//   - true  se error.message começa com 'TMDB_TOKEN_MISSING'
//   - false pra null/undefined/erro genérico
//
// Não precisa de rede nem mock de axios — é função pura sobre o objeto de erro.

import { isTokenError } from '../src/services/api';

describe('isTokenError', () => {
  it.todo('retorna true pra erro com response.status 401');
  it.todo('retorna true pra erro com flag isTokenError');
  it.todo('retorna true pra erro TMDB_TOKEN_MISSING');
  it.todo('retorna false pra null');
  it.todo('retorna false pra erro genérico (status 500)');
});
