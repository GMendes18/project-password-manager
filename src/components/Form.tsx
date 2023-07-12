import React from 'react';

type FormProps = {
  onChange: (event: React.MouseEvent<HTMLButtonElement>) => void;
};
export default function Form(props: FormProps) {
  const { onChange } = props;
  return (
    <>
      <label>
        Nome do serviço
        <input
          type="text"
        />
      </label>
      <label>
        Login
        <input type="text" />
      </label>
      <label>
        Senha
        <input type="password" />
      </label>
      <label>
        URL
        <input type="text" />
      </label>
      <button>Cadastrar</button>
      <button type="button" onClick={ onChange }>Cancelar</button>
    </>
  );
}
