// __tests__/counterStore.test.ts
//
// HANDS-ON — escreva os testes da counterStore.
//
// Mesmo padrão da favoritesStore: resete o estado entre testes.
//   useFavoritesStore.getState().increment()
//   useCounterStore.getState().count

import { useCounterStore } from '../src/store/counterStore';

beforeEach(() => {
  useCounterStore.setState({ count: 0 });
});

describe('counterStore', () => {
  it.todo('increment soma 1 ao count');
  it.todo('decrement subtrai 1 do count');
  it.todo('reset volta o count pra 0');
});
