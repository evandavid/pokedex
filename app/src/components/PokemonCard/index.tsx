import React from 'react';
import usePokemonDetail from '../../hooks/usePokemonDetail';
import { PokemontList } from '../../hooks/usePokemonList';
import { Row } from '../../pages/Homepage/styled';
import {
  CardContainer,
  CardContentContainer,
  PokemonName,
  ImageContainer,
  PokeType,
} from './styled';

const PokemonCard = ({ data }: { data: PokemontList }) => {
  const { data: pokemonDetail, isSuccess } = usePokemonDetail(data);

  return (
    <CardContainer>
      {isSuccess && (
        <ImageContainer>
          <img src={pokemonDetail.sprites.front_default} alt={data.name} />
        </ImageContainer>
      )}
      <CardContentContainer>
        <PokemonName>{data.name}</PokemonName>
        <Row>
          {pokemonDetail &&
            pokemonDetail.types.length &&
            pokemonDetail.types.map(({ type }) => (
              <PokeType key={`type-${type.name}`}>{type.name}</PokeType>
            ))}
        </Row>
      </CardContentContainer>
    </CardContainer>
  );
};

export default PokemonCard;
