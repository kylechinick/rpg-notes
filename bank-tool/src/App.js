import React, { useEffect, useState } from 'react';
import './App.css';
import CurrencyForm from './CurrencyForm';
import CurrencyBot from './CurrencyBot';

function App() {
  // const [currencyOptions, setCurrencyOptions] = useState([]);

  return (
    <>
      <h1>Currency Form</h1>
      <CurrencyForm />
      <CurrencyBot />
    </>
  );
}

export default App;
