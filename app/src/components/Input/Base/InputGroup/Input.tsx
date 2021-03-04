import React from 'react';
import styled from 'styled-components';
import {
  DISABLE_COLOR,
  ERROR_COLOR,
  PRIMARY_COLOR,
} from '../../../../libs/constant';

import { CustomInputProps } from '../interface';

const basicInput = `
  color: ${(props) => (props.error ? ERROR_COLOR : PRIMARY_COLOR)};
  border: none;
  outline: none;
  background: transparent;
  font-size: 14px;
  width: 100%;
  box-sizing: border-box;
  height: 100%;
  ::placeholder {
    color: ${DISABLE_COLOR};
  }
`;

const InputElement = styled.input<any>`
  ${basicInput}
  padding: 0 12px;
`;

const TextareaElement = styled.textarea<any>`
  ${basicInput}
  padding:  12px;
  resize: none;
`;

const Input = ({
  customValidator,
  onBlur,
  onChange,
  validateOn,
  value,
  inputRef,
  textarea,
  id,
  placeholder,
  onClick,
  readOnly,
}: CustomInputProps) => {
  const onInputValueChange = (val: string) => {
    let error;
    if (customValidator) {
      error = validateOn === 'typing' ? customValidator(val) : undefined;
    }

    if (onChange) onChange(val, error);
  };

  const onInputBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    if (validateOn === 'blur' && customValidator) {
      const error = customValidator(value);

      if (onChange) onChange(value as string, error as string);
    }
    if (onBlur) onBlur(event);
  };

  return textarea ? (
    <TextareaElement
      placeholder={placeholder}
      ref={inputRef}
      onClick={onClick}
      onBlur={onInputBlur}
      value={value || ''}
      onChange={(e) => onInputValueChange(e.target.value)}
      id={id}
    />
  ) : (
    <InputElement
      placeholder={placeholder}
      ref={inputRef}
      onClick={onClick}
      onBlur={onInputBlur}
      value={value || ''}
      onChange={(e) => onInputValueChange(e.target.value)}
      id={id}
      autocomplete="false"
      readOnly={readOnly}
    />
  );
};

export default Input;
