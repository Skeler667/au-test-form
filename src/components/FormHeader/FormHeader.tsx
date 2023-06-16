import { FC } from 'react';
import './FormHeader.scss';

interface IFormHeader {
  username: string;
  status: string;
}
const FormHeader: FC<IFormHeader> = ({ username, status }) => {
  return (
    <div className="form-header">
      <div className="form-header__block">
        <h1>
          Здравствуйте, <b>{username}</b>
        </h1>
        <a href="#test">Сменить статус</a>
      </div>

      <div className="form-header__block status">{status}</div>
    </div>
  );
};

export default FormHeader;
