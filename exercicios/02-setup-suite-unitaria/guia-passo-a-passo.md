# Guia passo a passo — Atividade 2 (Suíte Unitária RN)

> Manual prático ~1-2h. Você escreve testes Jest sobre o app que já vem pronto. Sem simulador, sem token, sem rede.

---

## 1. Setup (~10min)

```bash
# Fork no GitHub, depois clone o SEU fork:
git clone https://github.com/SEU-USUARIO/puc-iec-testes-aplicacoes-mobile.git
cd puc-iec-testes-aplicacoes-mobile/exercicios/02-setup-suite-unitaria/starter

node -v        # precisa v22.x  (use nvm: nvm install 22 && nvm use 22)
npm install    # ~2-3min na primeira vez
npm test       # posterUrl passa verde (3 testes); o resto aparece como "todo"
```

Saída esperada:

```
PASS  __tests__/posterUrl.test.ts
Tests:  16 todo, 3 passed, 19 total
```

---

## 2. Anatomia de um teste (modelo `posterUrl.test.ts`)

```typescript
import { posterUrl } from '../src/utils/poster-url';

describe('posterUrl', () => {           // agrupa
  it('monta URL com size default', () => {   // 1 caso
    expect(posterUrl('/a.jpg')).toBe('https://image.tmdb.org/t/p/w342/a.jpg');
  });
});
```

`describe` agrupa · `it`/`test` é um caso · `expect(x).toBe(y)` é o oráculo.

---

## 3. Testando store Zustand (`favoritesStore.test.ts`)

Store é **singleton** — sem reset, um teste vaza pro outro. O scaffold já tem o `beforeEach`:

```typescript
import { useFavoritesStore } from '../src/store/favoritesStore';

beforeEach(() => {
  useFavoritesStore.setState({ ids: [] });   // reset entre testes
});

const s = () => useFavoritesStore.getState();   // atalho

it('add(id) adiciona o id', () => {
  s().add(1);
  expect(s().ids).toEqual([1]);
});

it('toggle remove se já existe', () => {
  s().add(1);
  s().toggle(1);
  expect(s().ids).toEqual([]);
});
```

`getState()` lê estado e actions fora de componente React.

---

## 4. Testando função pura (`api.test.ts`)

`isTokenError` é função pura — passe objetos de erro, verifique o booleano:

```typescript
import { isTokenError } from '../src/services/api';

it('true pra 401', () => {
  expect(isTokenError({ response: { status: 401 } })).toBe(true);
});
it('false pra null', () => {
  expect(isTokenError(null)).toBe(false);
});
```

---

## 5. Cobertura

```bash
npm run test:coverage
open coverage/lcov-report/index.html   # macOS  (Linux: xdg-open)
```

Meta: **≥ 70%** em `src/store` e `src/utils`. Vermelho no relatório = linha não executada por teste.

---

## 6. Bônus — mock de dependência (`popularMovies.test.ts`)

```typescript
import { fetchPopularMovies } from '../src/queries/movies/get-popular-movies';
import { api } from '../src/services/api';

jest.mock('@/services/api');               // troca o módulo real por mock
const mockedGet = api.get as jest.Mock;

it('chama /movie/popular e devolve data', async () => {
  mockedGet.mockResolvedValue({ data: { page: 1, results: [] } });
  const out = await fetchPopularMovies(1);
  expect(mockedGet).toHaveBeenCalledWith('/movie/popular', { params: { page: 1 } });
  expect(out.page).toBe(1);
});
```

---

## Troubleshooting

| Erro | Causa | Fix |
|---|---|---|
| `Cannot find module 'zustand'` | esqueceu `npm install` | rode `npm install` |
| testes passam isolados, falham juntos | store não resetada | `setState` no `beforeEach` |
| cobertura 100% mas "não testei nada" | teste sem `expect` | todo `it` precisa de ao menos 1 assert |
| `Cannot read 'constructor'` ao renderizar componente | jest-expo 54 + React 19 + `<Image>` | **não teste componente** nesta atividade (escopo é unit puro) |
| Node version errada | RN precisa Node 22 | `nvm use 22` |

---

## Entrega

```bash
git checkout -b entrega/atividade-2-seu-nome
git add exercicios/02-setup-suite-unitaria/starter/__tests__
git commit -m "test(atv2): suite unitaria favoritesStore + counterStore + api"
git push origin entrega/atividade-2-seu-nome
```

> **NUNCA** comite `node_modules/` nem `coverage/` — o `.gitignore` já cuida. Submeta o link do commit/PR no Canvas.
