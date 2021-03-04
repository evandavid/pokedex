import React from 'react';
import styled from 'styled-components';

import Loading from './Loading';

const Container = styled.button`
  border: none;
  background: #ffcb05;
  padding: 0 24px;
  height: 42px;
  line-height: 42px;
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
  outline: none;
  display: inline-block;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  position: relative;
  text-align: center;
  border-radius: 8px;
`;

const Title = styled.div`
  color: #444;
  text-align: center;
  font-weight: bold;
  display: inline-block;
  padding-right: ${(props) => (props['data-loading'] ? '24px' : '0')};
`;

const A = styled.a``;

const LoadingContainer = styled.div`
  position: absolute;
  right: 12px;
  top: 6px;
`;

type ButtonProps = {
  href?: string;
  disabled?: boolean;
  id?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
  text: string;
  textStyle?: React.CSSProperties;
  loading?: boolean;
  isLink?: boolean;
};

const Button = ({
  isLink,
  disabled,
  id,
  onClick,
  style = {},
  text,
  textStyle = {},
  loading,
  href,
}: ButtonProps) => (
  <Container
    as={isLink ? A : undefined}
    id={id}
    style={style}
    disabled={disabled}
    href={href}
    onClick={() => {
      if (!isLink && onClick) onClick();
    }}
  >
    <Title data-loading={loading} style={textStyle}>
      {text}
    </Title>
    {loading && (
      <LoadingContainer>
        <Loading color="#fff" />
      </LoadingContainer>
    )}
  </Container>
);

export default Button;
