import './App.css';
import { useState } from 'react';
import Form from './components/Form';
import { FormInfoTypes } from './components/FormTypes';

const initialFormInfo = {
  nome: '',
  login: '',
  senha: '',
  url: '',
};

// export type FormInfoTypes = {
//   nome: string,
//   login: string,
//   senha: string,
// };

function App() {
  const [form, setForm] = useState(false);
  const [services, setServices] = useState<FormInfoTypes[]>([]);
  const [showPassword, setShowPassword] = useState(false);

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

  function handleServices() {
    setServices((prevServices) => [...prevServices, formInfo]);
    setForm(false);
    setFormInfo(initialFormInfo);
  }

  function handleDeleteService(index: number) {
    setServices(() => {
      const newServices = [...services];
      newServices.splice(index, 1);
      return newServices;
    });
  }

  function handlePassword() {
    setShowPassword((state) => (!state));
  }

  return (
    <>
      <div>
        Hello World
      </div>
      <h1>
        Gerenciador de senhas
      </h1>
      <label>
        <input
          type="checkbox"
          checked={ showPassword }
          onChange={ handlePassword }
        />
        Esconder senhas
      </label>
      {services.length === 0 ? (
        <p>Nenhuma senha cadastrada</p>
      ) : (
        <ul>
          {services.map(({ nome, login, senha, url }, index) => (
            <li key={ index }>
              <a href={ url }>
                {nome}
              </a>
              <p>
                {login}
              </p>
              <p>

                {showPassword ? '******' : senha}
              </p>
              <button
                type="button"
                onClick={ () => handleDeleteService(index) }
                data-testid="remove-btn"
              >
                Remover Serviço
              </button>
            </li>
          ))}
        </ul>
      )}
      {form ? (
        <Form
          onChange={ () => handleForm() }
          handleChange={ (event) => handleChange(event) }
          formInfo={ formInfo }
          validateButton={ () => validateButton() }
          handleServices={ () => handleServices() }
        />
      ) : (
        <button type="button" onClick={ handleForm }>Cadastrar nova senha</button>
      )}
    </>
  );
}

export default App;
