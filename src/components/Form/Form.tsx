import { FC, useState } from 'react';
import './Form.scss';
import FormField from '../FormField/FormField';
import TextField from '../TextField/TextField';
import FormHeader from '../FormHeader/FormHeader';

const Form: FC = () => {
  const [username, setUsername] = useState('Человек №3596941');
  const [status, setStatus] = useState('Прежде чем действовать, надо понять');
  return (
    <>
      <div className="container">
        <form className="form">
          <FormHeader username={username} status={status} />
          <FormField label="Ваш город">
            <TextField type="select" />
          </FormField>

          <FormField
            label="Пароль"
            description="Ваш новый пароль должен содержать не менее 5 символов"
          >
            <TextField type="password" />
          </FormField>

          <FormField
            label="Пароль еще раз"
            description="Повторите пароль, пожалуйста, это обезопасит вас с нами на случай ошибки"
          >
            <TextField type="password" />
          </FormField>

          <FormField
            label="Электронная почта"
            description="Можно изменить адрес, указанный при регистрации."
          >
            <TextField type="email" />
          </FormField>
        </form>
      </div>
    </>
  );
};

export default Form;
