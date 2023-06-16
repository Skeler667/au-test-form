import { FC } from 'react';
import './Form.scss';
import FormField from '../FormField/FormField';
import TextField from '../TextField/TextField';

const Form: FC = () => {
  return (
    <>
      <div className="container">
        <form className="form">
          <h1>Здравствуйте, Человек №3596941</h1>
          <a href="#test">Сменить статус</a>
          <div className="status">Прежде чем действовать, надо понять</div>
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
