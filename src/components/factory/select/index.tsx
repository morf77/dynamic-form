import { useEffect, useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';

import selectBasic from './styles';
import AnimatedSpinner from '../../ui/loaders/spinner';
import Dropdown from '../../ui/dropdown';
import Input from '../../ui/input';
import Icon, { ICON_NAME } from '../../../lib/icon';

const Select: FC<Components.factory.select> = props => {
  const {
    list,
    classNameListItem,
    classNameListContainer,
    closeOnInsideClick,
    onChange,
    value,
    defaultValue,
    onChangeInput,
    closeOnSelect = true,
    classNameContainer,
    variation = 'basic',
    valueInput: parentInputValue,
    isLoading,
    ...inputProps
  } = props;

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const ref = useRef<Components.ui.dropdownRef>(null);

  const [selectedValue, setSelectedValue] = useState<string | number>(defaultValue || '');

  useEffect(() => {
    defaultValue && defaultValue !== selectedValue && setSelectedValue(defaultValue);
  }, [defaultValue]);

  useEffect(() => {
    value && value !== selectedValue && setSelectedValue(value);
  }, [value]);

  const selectedItem = list.find(item => item.value === selectedValue);

  if (!selectedItem && selectedValue)
    throw new Error(
      "in selector the value or default value passing to select component doesn't match with given list!"
    );

  const [inputValue, setInputValue] = useState<Components.ui.input['value']>(
    selectedItem?.label || ''
  );

  useEffect(() => {
    parentInputValue && setInputValue(parentInputValue);
  }, [parentInputValue]);

  useEffect(() => {
    selectedItem?.label && inputValue !== selectedItem.label && setInputValue(selectedItem.label);
  }, [selectedItem]);

  const variantsListContainer = twMerge(selectBasic.styleSelectContainer(), classNameListContainer);

  const variantsListItem: (
    params: Parameters<typeof selectBasic.styleSelectListItem>[0]
  ) => string = params => twMerge(selectBasic.styleSelectListItem(params), classNameListItem);

  return (
    <Dropdown
      isFit
      ref={ref}
      color="transparent"
      setIsOpen={setIsOpen}
      classNameContainer={classNameContainer}
      closeOnInsideClick={closeOnInsideClick}
      button={
        <Input
          value={inputValue}
          className="cursor-pointer"
          classNameInput="cursor-pointer"
          onChange={v => {
            onChangeInput?.(v);

            setInputValue(v.target.value);
          }}
          {...inputProps}
          readOnly={inputProps.readOnly ?? true}
          prefix={
            isLoading ? (
              <AnimatedSpinner />
            ) : (
              inputProps.prefix || (
                <Icon
                  name={ICON_NAME.NAV}
                  className={`transition-transform fill-transparent size-8 stroke-gray-500 duration-200 ${isOpen ? 'rotate-180' : ''}`}
                />
              )
            )
          }
        />
      }
    >
      <div className={variantsListContainer}>
        {list.map((item, index) => (
          <button
            key={item.value.toString()}
            onClick={() => {
              onChange(item.value);
              setSelectedValue(item.value);
              closeOnSelect && ref.current?.closeDropdown();
            }}
            type="button"
            className={variantsListItem({
              isSelected: selectedItem?.value === item.value,
              isFirstItem: index === 0,
              isLastItem: index + 1 === list.length,
              isActive: item.isActive ?? true
            })}
          >
            {item.listLabel || item.label}
          </button>
        ))}
      </div>
    </Dropdown>
  );
};

export default Select;
