import { css } from 'styled-components';

export const chunk = (arr: any[], size: number) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  );

export const isMobile = (): boolean => {
  const toMatch = [
    /Android/i,
    /webOS/i,
    /iPhone/i,
    /iPad/i,
    /iPod/i,
    /BlackBerry/i,
    /Windows Phone/i,
  ];
  return toMatch.some((toMatchItem) => {
    return navigator.userAgent.match(toMatchItem);
  });
};

const screenSizes = {
  fullhd: 1408,
  widescreen: 1215,
  desktop: 1023,
  tablet: 768,
  mobile: 0,
};
export const media: any = Object.keys(screenSizes).reduce((acc, label) => {
  acc[label] = (args: any) => css`
    @media (min-width: ${screenSizes[label] / 16}rem) {
      ${css(args)}
    }
  `;
  return acc;
}, {});
