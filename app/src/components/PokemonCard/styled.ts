import styled from 'styled-components';

export const CardContainer = styled.div`
  margin: 6px;
  flex: 1;
  position: relative;
  padding-top: 45px;
  cursor: pointer;
  outline: none;
`;

export const CardContentContainer = styled.div`
  flex: 1;
  min-height: 100px;
  background: #fff;
  border-radius: 8px;
  padding: 12px;
  padding-top: 36px;
`;

export const PokemonName = styled.h1`
  text-align: center;
  font-size: 18px;
  text-transform: uppercase;
  margin-bottom: 6px;
`;

export const ImageContainer = styled.div`
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
`;

export const PokeType = styled.div`
  color: #555;
  font-size: 14px;
  background: #f0f0f0;
  padding: 3px 6px;
  margin: 0 3px;
  border-radius: 4px;
`;
