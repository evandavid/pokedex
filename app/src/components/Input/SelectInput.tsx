import React, { useEffect, useState } from 'react';
import { PRIMARY_COLOR } from '../../libs/constant';

import Dropdown from '../Dropdown';
import { OptionProps } from '../Dropdown/interfaces';
import KeyboardArrowDownIcon from '../Icons/KeyboardArrowDown';
import InputGroup from './Base/InputGroup';
import { CustomInputProps } from './Base/interface';

interface SelectInputProps extends Omit<CustomInputProps, 'options'> {
  options: OptionProps[];
}

const SelectInput = ({
  disabled,
  id,
  onChange,
  options,
  readOnly,
  value,
  placeholder,
  label,
}: SelectInputProps) => {
  const [show, setShow] = useState<boolean>(false);
  const [maskedValue, setMaskedValue] = useState<string>();

  const onShowOptions = () => {
    if (!disabled && !readOnly) {
      setShow(true);
    }
  };

  const getMaskValue = (
    val: string | readonly string[] | number
  ): string | undefined => {
    const selected = options.find((o) => o.code === val);

    switch (value) {
      case undefined:
      case null:
        return undefined;
      default:
        return selected.value;
    }
  };

  useEffect(() => {
    setMaskedValue(getMaskValue(value));
  }, [value]);

  return (
    <div style={{ position: 'relative' }}>
      <InputGroup
        id={id}
        placeholder={placeholder}
        value={maskedValue}
        onClick={onShowOptions}
        onFocus={onShowOptions}
        label={label}
        readOnly
        trailingIcon={<KeyboardArrowDownIcon color={PRIMARY_COLOR} />}
      />
      <Dropdown
        data={options}
        show={show}
        onHide={() => {
          setShow(false);
        }}
        style={{ top: label ? 72 : 46 }}
        onSelect={(selected) => {
          onChange(selected.code);
        }}
      />
    </div>
  );
};

export default SelectInput;
