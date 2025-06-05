import { useRef, useState } from 'react';
import persian from 'react-date-object/calendars/persian';
import persian_fa from 'react-date-object/locales/persian_fa';
import { Calendar, ChangedValue, DateObject } from 'react-multi-date-picker';
import { IDatePickerJalali } from './types';
import Dropdown from '../../ui/dropdown';
import Input from '../../ui/input';

const DatePickerJalali: FC<IDatePickerJalali> = ({
  className,
  onChange,
  ref: parentRef,
  defaultValue = new DateObject({
    //  locale:persian_fa,
    date: new Date(1995, 4, 4)
  }),
  ...props
}) => {
  const [date, setDate] = useState<ChangedValue | null | undefined>(defaultValue);

  const dropdownRef = useRef<Components.ui.dropdownRef>(null);

  // Persian week days
  // const persianWeekDay = ['ش', 'ی', 'د', 'س', 'چ', 'پ', 'ج'];

  return (
    <>
      <Dropdown
        placement="bottom"
        button={
          <Input
            classNameInput="cursor-pointer"
            readOnly
            type="text"
            ref={parentRef}
            {...props}
            value={date?.format('YYYY/MM/DD')}
          />
        }
        className={className}
        color="theme"
        disabled={props.disabled}
        isFit
        ref={dropdownRef}
      >
        <div className="p-3 flex justify-center [&>*]:min-w-full [&>*]:[&>*]:[&>*]:min-w-full [&_.rmdp-day-picker>*]:w-full [&_.rmdp-week]:whitespace-nowrap">
          <Calendar
            mapDays={() => {
              return {
                className:
                  'flex items-center justify-center w-[2rem] h-[2rem] !text-lg font-bold hover:!bg-primary-200'
              };
            }}
            className="dark:bg-gray-100"
            value={date}
            //---------------- for two language support
            // calendar={persian}
            // locale={persian_fa}
            // weekDays={persianWeekDay}
            onChange={date => {
              setDate(date);
              onChange?.(date);
              dropdownRef.current?.closeDropdown();
            }}
          />
        </div>
      </Dropdown>
    </>
  );
};

export default DatePickerJalali;
