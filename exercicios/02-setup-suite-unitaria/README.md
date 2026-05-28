# Atividade 2 — Suíte Unitária sobre App RN (10 pts)

> **TAM** | **Aula:** 2 (28/05/2026)

## Objetivo

Escrever uma **suíte de testes unitários (Jest)** sobre um app React Native que já vem implementado — o mesmo app TMDB da disciplina de Arquitetura. Foco do QA: testar código existente, não implementar feature.

## Por onde começar

1. **Enunciado completo:** [`enunciado.md`](./enunciado.md)
2. **Guia passo a passo:** [`guia-passo-a-passo.md`](./guia-passo-a-passo.md)
3. **App + scaffolds:** [`starter/`](./starter/) — leia o `README.md` do starter
4. **Modelo de README de entrega:** [`template-relatorio.md`](./template-relatorio.md)

```bash
cd starter
npm install
npm test     # posterUrl já passa verde; o resto é seu
```

## O que entregar

| # | Critério | Peso |
|---|----------|------|
| 1 | `npm install && npm test` roda em < 15min (eliminatório) | 2 |
| 2 | Testes `favoritesStore` (6 verdes) | 3 |
| 3 | Testes `counterStore` (3 verdes) | 1 |
| 4 | Testes `isTokenError` (5 verdes) | 2 |
| 5 | Cobertura ≥ 70% em `src/store` e `src/utils` | 2 |

**Bônus:** mock de query (`jest.mock`), CI verde, testes parametrizados (`it.each`).

> Você trabalha em `starter/__tests__/`. **Não comite `node_modules/` nem `coverage/`.**
