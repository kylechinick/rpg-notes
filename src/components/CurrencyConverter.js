import React, { useState } from 'react';
import styled from 'styled-components';

const ExplainerLockup = styled.div`
  width: 100%;
  border 2px solid blue;
`;

const CurrencyConverterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  // flex-direction: column;
  // width: 80%;
  padding: 1rem;
  border: 2px solid green;
`;

const CurrencyColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0.5rem;
`;
const ConversionForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 200px;
  margin-top: 1rem;
`;

const CurrencyInput = styled.input`
  margin-bottom: 1rem;
  padding: 0.5rem;
`;

const TotalsLockup = styled.div`
  width: 100%;
`;

function CurrencyConverter() {
  const [currentCurrencyValue, setcurrentCurrencyValue] = useState(0);
  const [currentCopperValue, setcurrentCopperValue] = useState(0);

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
      <ExplainerLockup>
        <h1>Currency Converter</h1>
        <p>Convert a currency type to its value in gold</p>
      </ExplainerLockup>
      <CurrencyColumn>
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
      </CurrencyColumn>

      <CurrencyColumn>
        {/* <ConversionForm onSubmit={handleSilverConversionSubmission}> */}
        <ConversionForm>
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
        <p>= {0} Gold</p>
      </CurrencyColumn>

      <TotalsLockup>
        <div>
          <p>Converted Silver</p>
          <p>{currentCurrencyValue}</p>
        </div>
        <div>
          <p>Converted Grand Total</p>
          <p>0</p>
        </div>
      </TotalsLockup>
    </CurrencyConverterContainer>
  );
}

export default CurrencyConverter;
