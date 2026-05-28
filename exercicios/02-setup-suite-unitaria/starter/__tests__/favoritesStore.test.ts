// __tests__/favoritesStore.test.ts
//
// HANDS-ON / ATIVIDADE 2 — escreva os testes da favoritesStore.
//
// Store Zustand é singleton: precisa resetar o estado entre testes
// (senão um teste contamina o outro). Use o beforeEach abaixo.
//
// Acesse estado e actions com useFavoritesStore.getState():
//   useFavoritesStore.getState().add(1)
//   useFavoritesStore.getState().ids        // → [1]
//   useFavoritesStore.getState().isFavorite(1)  // → true

import { useFavoritesStore } from '../src/store/favoritesStore';

beforeEach(() => {
  useFavoritesStore.setState({ ids: [] });
});

describe('favoritesStore', () => {
  it.todo('add(id) adiciona o id à lista');
  it.todo('add(id) não duplica id já existente');
  it.todo('remove(id) tira o id da lista');
  it.todo('toggle(id) adiciona se ausente e remove se presente');
  it.todo('isFavorite(id) reflete o estado atual');
  it.todo('clear() esvazia a lista');
});
