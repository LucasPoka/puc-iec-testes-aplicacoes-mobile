# Starter — Testes de Aplicações Mobile · Aula 2

App Expo + TypeScript **já implementado e funcionando**. Mesmo app que a turma de Arquitetura constrói — aqui o foco é o oposto: **escrever a suíte de testes unitários** sobre código que já existe.

> Hands-on da Aula 2 (escrevemos testes juntos) + Atividade 2 (entrega **11/06**, 10pts — você escreve a suíte e atinge cobertura ≥ 70%).

**Você NÃO implementa features.** Stores, services e utils já estão prontos. Sua entrega são os testes em `__tests__/`.

---

## O que está pronto pra você testar

| Arquivo | O que tem | Tipo de teste |
|---|---|---|
| `src/utils/poster-url.ts` | `posterUrl(path, size)` — monta URL do poster | função pura (Jest) |
| `src/store/favoritesStore.ts` | Zustand: `add/remove/toggle/clear/isFavorite` | store (Jest) |
| `src/store/counterStore.ts` | Zustand: `increment/decrement/reset` | store (Jest) |
| `src/services/api.ts` | `isTokenError(err)` — classifica erro de auth | função pura (Jest) |
| `src/queries/movies/get-popular-movies.ts` | `fetchPopularMovies(page)` — fetch da API | mock de dependência (jest.mock) — **bônus** |

```
src/
├── services/api.ts        ← HTTP (axios) + isTokenError
├── queries/movies/        ← TanStack Query
├── store/                 ← Zustand (counter, favorites)  ← alvo principal
├── screens/  components/   ← UI
├── types/movie.ts
└── utils/poster-url.ts    ← função pura — comece por aqui

__tests__/                 ← SUA ENTREGA (Jest + RNTL)
├── posterUrl.test.ts       ← EXEMPLO RESOLVIDO (modelo)
├── favoritesStore.test.ts  ← it.todo — preencha
├── counterStore.test.ts    ← it.todo — preencha
├── api.test.ts             ← it.todo — preencha
└── popularMovies.test.ts   ← it.todo — bônus (mock da api)
```

---

## Setup

```bash
git clone https://github.com/SEU-USUARIO/puc-iec-testes-aplicacoes-mobile.git
cd puc-iec-testes-aplicacoes-mobile/exercicios/02-setup-suite-unitaria/starter
npm install
npm test          # posterUrl já passa verde (3 testes); o resto é it.todo
```

> **Unit test não precisa de simulador, token nem rede.** Roda só com Node.
> O app só roda de verdade (`npx expo start`) se você gerar um token TMDB — opcional pra esta atividade.

```bash
npm test               # roda a suíte
npm run test:watch     # watch mode (re-roda ao salvar)
npm run test:coverage  # relatório de cobertura (abre coverage/lcov-report/index.html)
```

---

## Suas tasks

| # | Onde | O que fazer |
|---|---|---|
| TASK 1 | `__tests__/posterUrl.test.ts` | Leia — é o **modelo resolvido** |
| TASK 2 | `__tests__/favoritesStore.test.ts` | Escreva 6 testes (add/remove/toggle/isFavorite/clear) |
| TASK 3 | `__tests__/counterStore.test.ts` | Escreva 3 testes (increment/decrement/reset) |
| TASK 4 | `__tests__/api.test.ts` | Escreva 5 testes de `isTokenError` |
| TASK 5 | — | Atinja **cobertura ≥ 70%** em `src/store` e `src/utils` |
| TASK 6 (bônus) | `__tests__/popularMovies.test.ts` | `fetchPopularMovies` com `jest.mock('@/services/api')` |

```bash
grep -rn "it.todo\|TODO \[TASK" __tests__/   # ver o que falta
```

---

## Dicas

- **Store Zustand é singleton.** Resete o estado entre testes com `useFavoritesStore.setState({ ids: [] })` no `beforeEach` (já está nos scaffolds).
- **Acesse fora de componente** com `useStore.getState()`: `useCounterStore.getState().increment()`.
- **Cobertura útil** = código *executado E verificado*. Renderizar sem `expect` infla a métrica e não testa nada.
- **IA pode ajudar** a gerar testes — mas **valide**: rode, confira asserts, cuidado com seletor/mock alucinado.

---

## Referências

- [Jest](https://jestjs.io/docs/getting-started) · [jest-expo](https://docs.expo.dev/develop/unit-testing/)
- [React Native Testing Library](https://callstack.github.io/react-native-testing-library/)
- [Zustand — testing](https://github.com/pmndrs/zustand/blob/main/docs/guides/testing.md)
- [xUnit Test Patterns (Meszaros)](http://xunitpatterns.com/)
