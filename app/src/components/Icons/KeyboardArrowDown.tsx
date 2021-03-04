import React from 'react';

interface IIconProps {
  size?: number;
  color?: string;
}

const KeyboardArrowDownIcon = ({
  size = 24,
  color = '#212121',
}: IIconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24">
    <path d="M0 0h24v24H0z" fill="none" />
    <path
      fill={color}
      d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"
    />
  </svg>
);

export default KeyboardArrowDownIcon;
