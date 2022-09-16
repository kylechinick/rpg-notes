import React, { useEffect, useState } from 'react';
import './App.css';
import CurrencyRow from './CurrencyRow';

const BASE_URL = 'https://api.apilayer.com/fixer/latest';

function App() {
  const [currencyOptions, setCurrencyOptions] = useState([]);

  useEffect(() => {
    fetch(BASE_URL)
      .then(res => res.json())
      .then(data => console.log(data));
  }, []);

  return (
    <>
      <h1>Hello World</h1>
      <CurrencyRow />
      <div>=</div>
      <CurrencyRow />
    </>
  );
}

export default App;
