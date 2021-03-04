import React from 'react';
import Button from '../../components/Button';
import Loading from '../../components/Loading';

import PokemonLogo from '../../components/Logo';
import PokemonCard from '../../components/PokemonCard';
import usePokemonList from '../../hooks/usePokemonList';
import chunk from '../../libs/util';
import { Row, PokemonListContainer } from './styled';

const Homepage = () => {
  const {
    isFetching,
    isFetchingNextPage,
    hasNextPage,
    data,
    fetchNextPage,
  } = usePokemonList();

  return (
    <>
      {isFetching && <Loading />}
      <Row>
        <PokemonLogo />
      </Row>
      <PokemonListContainer>
        {data &&
          data.pages.length &&
          data.pages.map((group, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <React.Fragment key={`pokemon-group-${i}`}>
              {chunk(group.results, 4).map((slice: any, sliceIndex) => (
                // eslint-disable-next-line react/no-array-index-key
                <Row key={`pokemon-group-${sliceIndex}-${i}`}>
                  {slice.map((pokemon: { name: any; url: string }) => (
                    <PokemonCard key={pokemon.name} data={pokemon} />
                  ))}
                </Row>
              ))}
            </React.Fragment>
          ))}
      </PokemonListContainer>

      <Row>
        <Button
          onClick={() => {
            fetchNextPage();
          }}
          text="Load More"
          loading={isFetchingNextPage}
          disabled={!hasNextPage}
        />
      </Row>
    </>
  );
};

export default Homepage;
