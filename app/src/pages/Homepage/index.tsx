import React, { useState, useEffect } from 'react';
import Button from '../../components/Button';
import Loading from '../../components/Loading';

import PokemonLogo from '../../components/Logo';
import PokemonCard from '../../components/PokemonCard';
import usePokemonList from '../../hooks/usePokemonList';
import { chunk, isMobile } from '../../libs/util';
import { Row, PokemonListContainer } from './styled';

const Homepage = () => {
  const {
    isFetching,
    isFetchingNextPage,
    hasNextPage,
    data,
    fetchNextPage,
  } = usePokemonList();

  const getChunkSize = (): number => {
    if (isMobile()) return 2;
    return 4;
  };

  const [chunkSize, setChunkSize] = useState(getChunkSize());

  const onResize = () => {
    const isSmallScreen = window.innerWidth <= 800 && window.innerHeight <= 600;
    setChunkSize(isSmallScreen ? 2 : 4);
  };

  useEffect(() => {
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <>
      <Row>
        <PokemonLogo />
      </Row>
      {isFetching && (
        <Row>
          <Loading />
        </Row>
      )}
      <PokemonListContainer>
        {data &&
          data.pages.length &&
          data.pages.map((group, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <React.Fragment key={`pokemon-group-${i}`}>
              {chunk(group.results, chunkSize).map((slice: any, sliceIndex) => (
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
