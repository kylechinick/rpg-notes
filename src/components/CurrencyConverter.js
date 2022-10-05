import React, { useState } from 'react';
import styled from 'styled-components';

const CurrencyConverterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  padding: 1rem;
`;

const currencyColumn = styled.div`
  display: flex;
  flex-direction: column;
`;
const ConversionForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 200px;
  margin-top: 1rem;
`;

const CurrencyInput = styled.input`
  margin-bottom: 1rem;
  padding: 0.5rem;
`;

function CurrencyConverter() {
  const [currentCurrencyValue, setcurrentCurrencyValue] = useState(0);

  function handleCurrencyConverterSubmission(event) {
    event.preventDefault();

    const currencyType = event.target.currencyType.value;
    const currencyAmount = event.target.currencyAmount.value;

    switch (currencyType) {
      case 'copper':
        setcurrentCurrencyValue(currencyAmount / 100);
        break;
      case 'silver':
        setcurrentCurrencyValue(currencyAmount / 10);
        console.log(currencyAmount);
        break;
      case 'electrum':
        setcurrentCurrencyValue(currencyAmount / 2);
        break;
      case 'gold':
        setcurrentCurrencyValue(currencyAmount / 1);
        break;
      case 'platinum':
        setcurrentCurrencyValue(currencyAmount * 10);
        break;
      default:
        break;
    }
  }

  return (
    <CurrencyConverterContainer>
      <h1>Currency Converter</h1>
      <p>Convert a currency type to its value in gold</p>

      <ConversionForm onSubmit={handleCurrencyConverterSubmission}>
        <CurrencyInput
          type='text'
          placeholder='Currency Type'
          name='currencyType'
        />
        <CurrencyInput
          type='number'
          placeholder='Currency Amount'
          name='currencyAmount'
          id='currencyAmount'
        />
        <button>Convert</button>
      </ConversionForm>

      <currencyColumn>
        <ConversionForm onSubmit={handleSilverConversionSubmission}>
          <CurrencyInput
            type='text'
            placeholder='Currency Type'
            name='currencyType'
          />
          <CurrencyInput
            type='number'
            placeholder='Currency Amount'
            name='currencyAmount'
            id='currencyAmount'
          />
          <button>Convert</button>
        </ConversionForm>
      </currencyColumn>

      <div>
        <p>Converted Silver</p>
        <p>{currentCurrencyValue}</p>
      </div>
      <div>
        <p>Converted Grand Total</p>
        <p>0</p>
      </div>
    </CurrencyConverterContainer>
  );
}

export default CurrencyConverter;
