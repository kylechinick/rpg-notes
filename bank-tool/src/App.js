import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${name}`)
  }

  return (
    <React.Fragment>
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
        <input 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <input type="submit" />
    </form>
      <div>
        <p>{name}</p>
      </div>
    </React.Fragment>
  );
}

export default App;
