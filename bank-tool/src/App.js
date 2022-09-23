import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  const [inputs, setInputs] = useState({});

  const handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(inputs);
  };

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <label>
          Enter your name:
          <input
            type='text'
            name='username'
            value={inputs.username || ''}
            onChange={handleChange}
          />
        </label>
        <label>
          Enter your age:
          <input
            type='number'
            name='amount'
            value={inputs.amount || ''}
            onChange={handleChange}
          />
        </label>
        <input type='submit' />
      </form>
      <div>
        <p>{inputs.username}</p>
        <p>
          Your {inputs.amount} silver worth {1/inputs.amount} gold
        </p>
      </div>
    </React.Fragment>
  );
}

export default App;
