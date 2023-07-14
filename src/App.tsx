import './App.css';
import { useState } from 'react';
import Form from './components/Form';

const initialFormInfo = {
  nome: '',
  login: '',
  senha: '',
};

// export type FormInfoTypes = {
//   nome: string,
//   login: string,
//   senha: string,
// };

function App() {
  const [form, setForm] = useState(false);

  const handleForm = () => {
    setForm((state) => !state);
  };

  const [formInfo, setFormInfo] = useState(initialFormInfo);
  function handleChange(event
  : React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const { name, value } = event.target;
    setFormInfo({
      ...formInfo,
      [name]: value,
    });
  }

  function validateButton() {
    const { nome, login, senha } = formInfo;
    if (nome && login && senha) {
      const senhaLengthMin = senha.length >= 8; // && senha.length <= 16;
      const senhaLengthMax = senha.length <= 16;
      const senhaNumbers = /\d/.test(senha);
      const senhaLetters = /[a-zA-Z]/.test(senha);
      const senhaSpecialCharacters = /[!@#$%^&*]/.test(senha);

      return (
        senhaLengthMin
        && senhaLengthMax
        && senhaLetters
        && senhaNumbers
        && senhaSpecialCharacters
      );
    }
    return false;
  }

  return (
    <>
      <div>
        Hello World
      </div>
      <h1>
        Gerenciador de senhas
      </h1>
      {form ? (
        <Form
          onChange={ () => handleForm() }
          handleChange={ (event) => handleChange(event) }
          formInfo={ formInfo }
          validateButton={ () => validateButton() }
        />
      ) : (
        <button type="button" onClick={ handleForm }>Cadastrar nova senha</button>
      )}
    </>
  );
}

export default App;
