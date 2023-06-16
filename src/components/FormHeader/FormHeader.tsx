import { FC } from 'react';
import './FormHeader.scss';

interface IFormHeader {
  username: string;
}
const FormHeader: FC<IFormHeader> = ({ username }) => {
  return (
    <div className="form-header">
      <div className="form-header__block">
        <h1>
          Здравствуйте, <b>{username}</b>
        </h1>
        <a href="#test">Сменить статус</a>
      </div>

      <div className="form-header__block status">
        Прежде чем действовать, надо понять
      </div>
    </div>
  );
};

export default FormHeader;
