import { RefCallBack } from 'react-hook-form';
import { ChangedValue } from 'react-multi-date-picker';

export type IDatePickerJalali = {
  className?: string;
  onChange?: (date: ChangedValue) => void;
  ref?: RefCallBack;
  defaultValue?: ChangedValue;
} & Omit<Components.ui.input, 'onChange' | 'defaultValue' | 'type'>;
