import { useState, ChangeEvent } from 'react';

export const useForm = <Type extends Object>(initialState: Type) => {
  const [form, setForm] = useState(initialState);

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement | any>) => {
    const { type, name, value, checked } = target;

    setForm({
      ...form,
      [name]:
        type === 'select-multiple'
          ? Array.from(target.selectedOptions, (option: any) => option.value)
          : type === 'checkbox'
          ? checked
          : value
    });
  };

  return {
    form,
    setForm,
    handleChange
  };
};
