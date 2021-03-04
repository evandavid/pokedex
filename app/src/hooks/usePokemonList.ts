import { useInfiniteQuery } from 'react-query';

export type PokemontList = {
  name: string;
  url: string;
};

export type PokemonResponse = {
  count: number;
  next: string;
  previous: string;
  results: PokemontList[];
};

const usePokemonList = (): {
  isFetching: boolean;
  isFetchingNextPage: boolean;
  hasNextPage: boolean;
  data: { pages: PokemonResponse[] };
  fetchNextPage: () => any;
} => {
  const perPage = 20;
  const fetchPokemonList = ({ pageParam = 0 }) => {
    return new Promise((resolve, reject) => {
      fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=${perPage}&offset=${pageParam}`,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
        .then((response) => response.json())
        .then((response) => {
          resolve(response);
        })
        .catch((e) => reject(e));
    });
  };

  const getParameterByName = (name: string, url: string): string => {
    const regex = new RegExp(`[?&]${name}(=([^&#]*)|&|#|$)`);
    const results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  };

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
  } = useInfiniteQuery<any>('pokemons', fetchPokemonList, {
    getNextPageParam: (lastPage: { next: string }): number | undefined => {
      if (lastPage && lastPage.next) {
        const nextCursor: string = getParameterByName('offset', lastPage.next);
        return parseInt(nextCursor, 10);
      }
      return undefined;
    },
  });

  return {
    isFetching,
    isFetchingNextPage,
    hasNextPage,
    data,
    fetchNextPage,
  };
};

export default usePokemonList;
