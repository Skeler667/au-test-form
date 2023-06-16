import React from 'react';

interface ITextField {
  type?: 'text' | 'number' | 'password' | 'email' | 'select';
  value?: string | number;
  id?: string;
}
const TextField: React.FC<ITextField> = ({ type = 'text', value = '' }) => {
  const [inputValue, setInputValue] = React.useState(value);

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(evt.target.value);
  };

  return <input type={type} value={inputValue} onChange={handleChange} />;
};

export default TextField;
