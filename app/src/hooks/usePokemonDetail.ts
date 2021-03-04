/* eslint-disable camelcase */
import { useQuery } from 'react-query';
import { PokemontList } from './usePokemonList';

export type PokemonAbility = {
  ability: { name: string };
  is_hidden: boolean;
};

export type PokemonSprites = {
  back_default?: string;
  back_female?: string;
  back_shiny_female?: string;
  back_shiny?: string;
  front_default?: string;
  front_female?: string;
  front_shiny_female?: string;
  front_shiny?: string;
};

export type PokemonStat = {
  base_stat: number;
  stat: { name: string };
};

export type PokemonDetail = {
  abilities: PokemonAbility[];
  forms: { name: string }[];
  height: number;
  id: number;
  name: string;
  species: { name: string };
  sprites: PokemonSprites;
  stat: PokemonStat[];
  types: { type: { name: string } }[];
  weight: number;
};

const usePokemonDetail = ({
  name,
  url,
}: PokemontList): {
  data: PokemonDetail;
  isLoading: boolean;
  isSuccess: boolean;
} => {
  const fetchPokemon = () => {
    return new Promise((resolve, reject) => {
      fetch(url, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => response.json())
        .then((response) => {
          resolve(response);
        })
        .catch((e) => reject(e));
    });
  };

  const { data, isLoading, isSuccess } = useQuery<any>(
    `pokemon-${name}`,
    fetchPokemon
  );

  return { data, isLoading, isSuccess };
};

export default usePokemonDetail;
