import { FC, useState } from 'react';
import './Form.scss';
import FormField from '../FormField/FormField';
import TextField from '../TextField/TextField';
import FormHeader from '../FormHeader/FormHeader';
import Button from '../Button/Button';

const Form: FC = () => {
  const [username, setUsername] = useState('Человек №3596941');
  const [status, setStatus] = useState('Прежде чем действовать, надо понять');
  return (
    <>
      <div className="container">
        <form className="form">
          <FormHeader username={username} status={status} />

          <div className='parrentField'>
          <FormField>
            <label>Ваш город</label>
            <TextField type="select" />
          </FormField>

          <FormField>
            <label>Пароль</label>
            <TextField type="password" />
            <div className="description">
              Ваш новый пароль должен содержать не менее 5 символов
            </div>
          </FormField>

          <FormField>
            <label>Пароль еще раз</label>
            <TextField type="password" />
            <div className="description">
              Повторите пароль, пожалуйста, это обезопасит вас с нами на случай
              ошибки
            </div>
          </FormField>

          <FormField>
            <label>Электронная почта</label>
            <TextField type="email" />
            <div className="description">
              Можно изменить адрес, указанный при регистрации
            </div>
          </FormField>

          <FormField>
            <label>Я согласен</label>
            <div>
              <TextField type="checkbox" />
              <div className="description">
                принимать актуальную информацию на емейл
              </div>
            </div>
          </FormField>
          <Button>Изменить</Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
