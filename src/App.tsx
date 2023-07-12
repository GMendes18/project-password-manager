import './App.css';
import { useState } from 'react';
import Form from './components/Form';

function App() {
  const [form, setForm] = useState(false);
  const handleForm = () => {
    setForm((state) => !state);
  };
  return (
    <>
      <div>
        Hello World
      </div>
      <h1>
        Gerenciador de senhas
      </h1>
      {form ? (
        <Form onChange={ handleForm } />
      ) : (
        <button type="button" onClick={ handleForm }>Cadastrar nova senha</button>
      )}
    </>
  );
}

export default App;
