/* eslint-disable camelcase */
import { PokeItem } from 'types/types';
import { getUrlOptions } from 'utils';

const ITEM_API = 'https://pokeapi.co/api/v2/item/';

export interface ItemAPI {
  cost: number;
  effect_entries: { effect: string; short_effect: string }[];
  id: 1;
  names: { name: string }[];
  sprites: { default: string };
}

export interface ItemListAPI {
  next: string | null;
  previous: string | null;
  results: { name: string; url: string }[];
}

export interface FetchItemsArgs {
  offset?: number;
  limit?: number;
}

export interface FetchItemsReturn {
  next: {
    limit: number;
    offset: number;
  } | null;

  previous: {
    limit: number;
    offset: number;
  } | null;

  items: PokeItem[];
}

const fetchItems = async ({
  limit = 10,
  offset = 1,
}: FetchItemsArgs): Promise<FetchItemsReturn> => {
  const listRes = await fetch(`${ITEM_API}?limit=${limit}&offset=${offset}`);
  const list: ItemListAPI = await listRes.json();

  const itemsRes = await Promise.all(list.results.map((i) => fetch(i.url)));
  const items = await Promise.all(itemsRes.map((i) => i.json()));

  const pokeItems: PokeItem[] = items.map((item: ItemAPI) => ({
    id: item.id,
    name: item.names[7].name,
    cost: item.cost,
    description: {
      long: item.effect_entries[0].effect,
      short: item.effect_entries[0].short_effect,
    },
    spriteURL: item.sprites.default,
  }));

  return {
    items: pokeItems,
    next: getUrlOptions(list.next),
    previous: getUrlOptions(list.previous),
  };
};

const pokeApi = {
  fetchItems,
};

export default pokeApi;
