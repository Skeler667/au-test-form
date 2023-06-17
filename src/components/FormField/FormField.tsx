import React, { Children, PropsWithChildren } from 'react';
import './FormField.scss';

const FormField: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <fieldset>
      {Children.map(children, (child) => (
        <div className="Row">{child}</div>
      ))}
    </fieldset>
  );
};

export default FormField;
