import styled from 'styled-components';
import { media } from '../../libs/util';

export const CardContainer = styled.div`
  margin: 6px;
  flex: 1 1 0;
  position: relative;
  padding-top: 45px;
  cursor: pointer;
  outline: none;
`;

export const CardContentContainer = styled.div`
  min-height: 100px;
  background: #fff;
  border-radius: 8px;
  padding: 12px;
  padding-top: 36px;
  width: 100%;
`;

export const PokemonName = styled.h1`
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 6px;

  ${media.mobile`
    font-size: 14px;
  `}
  ${media.tablet`
    font-size: 16px;
  `}
  ${media.desktop`
    font-size: 18px;
  `}
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

  ${media.mobile`
    font-size: 12px;
  `}
  ${media.tablet`
    font-size: 14px;
  `}
`;
