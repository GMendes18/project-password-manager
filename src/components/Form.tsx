import React from 'react';
import { FormInfoTypes } from './FormTypes';

type FormProps = {
  onChange: () => void;
  formInfo: FormInfoTypes,
  handleChange: (
    event:
    React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>)
  => void,
  validateButton: () => boolean
};
export default function Form(props: FormProps) {
  const { onChange, formInfo, handleChange, validateButton } = props;
  const { nome, login, senha } = formInfo;
  return (
    <>
      <label>
        Nome do serviço
        <input
          type="text"
          name="nome"
          value={ nome }
          onChange={ handleChange }
        />
      </label>
      <label>
        Login
        <input
          type="text"
          name="login"
          value={ login }
          onChange={ handleChange }
        />
      </label>
      <label>
        Senha
        <input
          type="password"
          name="senha"
          value={ senha }
          onChange={ handleChange }
        />
      </label>
      <label>
        URL
        <input type="text" />
      </label>
      <button disabled={ !validateButton() }>Cadastrar</button>
      <button type="button" onClick={ onChange }>Cancelar</button>
    </>
  );
}
