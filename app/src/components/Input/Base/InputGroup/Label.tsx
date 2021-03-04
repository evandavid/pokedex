import React from 'react';
import styled from 'styled-components';
import { ERROR_COLOR, PRIMARY_COLOR } from '../../../../libs/constant';

const LabelElement = styled.div<any>`
  color: ${(props) => (props.error ? ERROR_COLOR : PRIMARY_COLOR)};
  margin-bottom: 8px;
  margin-top: 18px;
  font-weight: bold;
  font-size: 14px;
`;

const InputLabel = ({ error, text }: { text: string; error?: string }) => (
  <LabelElement error={error}>{text}</LabelElement>
);

export default InputLabel;
