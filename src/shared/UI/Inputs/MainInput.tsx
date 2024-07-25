import React, { useEffect, useState } from 'react';
import { ControllerRenderProps, FieldValues } from 'react-hook-form';
import classNames from 'classnames';
import { Input } from '@/shadecn/components/ui/input';
import { FormControl, FormItem, FormLabel, FormMessage } from '@/shadecn/components/ui/form';

interface IMainInputs {
  field?: ControllerRenderProps<FieldValues, string>;
  type: HTMLInputElement['type'];
  label?: string;
  placeholder: string;
  min?: number;
  max?: number;
  minLength?: number;
  maxLength?: number;
  required?: boolean;
  disabled?: boolean;
}
export default function MainInput({
  field,
  type = 'text',
  label,
  placeholder,
  disabled,
  min,
  max,
  minLength,
  maxLength,
  required,
}: IMainInputs): JSX.Element {
  const [value, setValue] = useState(field?.value ?? '');

  useEffect(() => {
    if (field) {
      setValue(field.value || '');
    }
  }, [field]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    field?.onChange(e.target.value);
  };

  return (
    <FormItem className={classNames({ 'pointer-events-none opacity-50': disabled })}>
      <FormLabel className="text-sm font-semibold">{label}</FormLabel>
      <FormControl>
        <div>
          <Input
            placeholder={placeholder}
            type={type}
            {...field}
            disabled={disabled}
            min={min}
            max={max}
            minLength={minLength}
            maxLength={maxLength}
            required={required}
            onChange={handleChange}
            value={value ?? ''}
            className={''}
          />
        </div>
      </FormControl>
      <FormMessage />
    </FormItem>
  );
}
