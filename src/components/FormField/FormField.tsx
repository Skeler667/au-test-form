import React, { ReactNode } from 'react';
import './FormField.scss';

interface IFormField {
  label?: string;
  description?: string;
  children?: ReactNode;
}
const FormField: React.FC<IFormField> = ({ children, label, description }) => {
  return (
    <fieldset>
      <label htmlFor="">{label}</label>
      {children}
      <div className="description">{description}</div>
    </fieldset>
  );
};

export default FormField;
