import React from 'react';
import styled from 'styled-components';
import {
  ERROR_COLOR,
  DISABLE_COLOR,
  PRIMARY_COLOR,
} from '../../../../libs/constant';

import { CustomInputProps } from '../interface';
import Input from './Input';
import InputLabel from './Label';

const InputContainer = styled.div<any>`
  border-color: ${(props) => (props.error ? ERROR_COLOR : DISABLE_COLOR)};
  border-width: 1px;
  border-style: solid;
  height: ${(props) => (props.textarea ? 120 : 46)}px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Info = styled.div<any>`
  margin-top: 3px;
  color: ${(props) => (props.error ? ERROR_COLOR : '#757575')};
  font-size: 12px;
`;

const LeadingTextContainer = styled.div<any>`
  padding-left: 12px;
  color: ${(props) => (props.error ? ERROR_COLOR : PRIMARY_COLOR)};
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TrailingTextContainer = styled(LeadingTextContainer)`
  padding-right: 12px;
  padding-left: 0px;
`;

const InputGroup = ({
  customValidator,
  error,
  id,
  info,
  inputRef,
  label,
  leadingIcon,
  leadingText,
  onBlur,
  onChange,
  onClick,
  placeholder,
  textarea,
  trailingIcon,
  trailingText,
  validateOn,
  value,
  readOnly,
}: CustomInputProps) => (
  <div>
    <InputLabel text={label} error={error} />
    <InputContainer error={error} textarea={textarea}>
      {leadingText ||
        (leadingIcon && (
          <LeadingTextContainer error={error}>
            {leadingText || leadingIcon}
          </LeadingTextContainer>
        ))}
      <Input
        textarea={textarea}
        customValidator={customValidator}
        onBlur={onBlur}
        onChange={onChange}
        validateOn={validateOn}
        value={value}
        inputRef={inputRef}
        id={id}
        placeholder={placeholder}
        onClick={onClick}
        readOnly={readOnly}
      />
      {trailingText ||
        (trailingIcon && (
          <TrailingTextContainer error={error}>
            {trailingText || trailingIcon}
          </TrailingTextContainer>
        ))}
    </InputContainer>
    {(error || info) && <Info error={error}>{error || info}</Info>}
  </div>
);

export default InputGroup;
