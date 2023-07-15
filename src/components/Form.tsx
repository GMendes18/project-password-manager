import React from 'react';
import { FormInfoTypes } from './FormTypes';

type FormProps = {
  onChange: () => void;
  formInfo: FormInfoTypes,
  handleChange: (
    event:
    React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>)
  => void,
  validateButton: () => boolean,
  handleServices: () => void;
};

export default function Form(props: FormProps) {
  const valid = 'valid-password-check';
  const invalid = 'invalid-password-check';
  const { onChange, formInfo, handleChange, validateButton, handleServices } = props;
  const { nome, login, senha, url } = formInfo;
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
        <input
          type="text"
          name="url"
          value={ url }
          onChange={ handleChange }
        />
      </label>
      <div>
        <p className={ senha.length >= 8 ? valid : invalid }>
          Possuir 8 ou mais caracteres
        </p>
        <p className={ senha.length <= 16 ? valid : invalid }>
          Possuir até 16 caracteres
        </p>
        <p className={ /\d/.test(senha) && /[a-zA-Z]/.test(senha) ? valid : invalid }>
          Possuir letras e números
        </p>
        <p className={ /[!@#$%^&*]/.test(senha) ? valid : invalid }>
          Possuir algum caractere especial
        </p>
      </div>
      <button disabled={ !validateButton() } onClick={ handleServices }>Cadastrar</button>
      <button type="button" onClick={ onChange }>Cancelar</button>
    </>
  );
}
