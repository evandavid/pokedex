import React from 'react';
import { OptionProps } from '../../Dropdown/interfaces';

export interface CustomInputProps
  extends Omit<React.HTMLProps<HTMLInputElement>, 'onChange'> {
  label?: string;
  ref?: React.MutableRefObject<HTMLInputElement>;
  textarea?: boolean;
  onChange?(value: string | number, error?: string): void;

  info?: string;
  error?: string;
  skipValidation?: boolean;

  options?: OptionProps[];

  leadingIcon?: React.ReactNode;
  leadingText?: string;
  trailingIcon?: React.ReactNode;
  trailingText?: string;
  onTrailingIconSelect?: () => void;
  onLeadingIconSelect?: () => void;

  parentStyle?: React.CSSProperties;
  id?: string;

  customValidator?: (
    input: string | number | readonly string[]
  ) => string | void;
  validateOn?: 'blur' | 'typing';
  withTime?: boolean;
  inputRef?: React.MutableRefObject<HTMLInputElement>;
}
