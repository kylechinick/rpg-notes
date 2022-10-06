import React, { useState } from 'react';
import styled from 'styled-components';

const ExplainerLockup = styled.div`
  width: 100%;
  // border 2px solid blue;
`;

const CurrencyConverterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  // flex-direction: column;
  // width: 80%;
  padding: 1rem;
  // border: 2px solid green;
`;

const CurrencyColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0.5rem;
  padding: 1rem;
  background: rgb(226, 219, 199);
  border-radius: 6px;
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
  height: 2.5rem;
  border: 2px solid #333;
  border-radius: 6px;
`;

const CurrencyColumnButton = styled.button`
  margin-left: 1rem;
  background: none;
  border: 2px solid #333;
`;

const CurrencyColumnOutput = styled.p`
  // border: 2px solid #333;
  // color: rgb(226, 219, 199);
  font-size: 1.4rem;
`;

const TotalsLockup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
  width: 100%;
`;

function CurrencyConverter() {
  const [currentCurrencyValue, setcurrentCurrencyValue] = useState(0);
  const [currentCopperValue, setcurrentCopperValue] = useState(0);
  const [currentSilverValue, setcurrentSilverValue] = useState(0);

  // function handleCurrencyConverterSubmission(event) {
  //   event.preventDefault();

  //   const currencyType = event.target.currencyType.value;
  //   const currencyAmount = event.target.currencyAmount.value;

  //   switch (currencyType) {
  //     case 'copper':
  //       setcurrentCurrencyValue(currencyAmount / 100);
  //       break;
  //     case 'silver':
  //       setcurrentCurrencyValue(currencyAmount / 10);
  //       console.log(currencyAmount);
  //       break;
  //     case 'electrum':
  //       setcurrentCurrencyValue(currencyAmount / 2);
  //       break;
  //     case 'gold':
  //       setcurrentCurrencyValue(currencyAmount / 1);
  //       break;
  //     case 'platinum':
  //       setcurrentCurrencyValue(currencyAmount * 10);
  //       break;
  //     default:
  //       break;
  //   }
  // }

  function handleCopperConverterSubmission(event) {
    event.preventDefault();
    const currencyAmount = event.target.currencyAmount.value;
    setcurrentCopperValue(currencyAmount / 100);
  }

  function handleSilverConverterSubmission(event) {
    event.preventDefault();
    const currencyAmount = event.target.currencyAmount.value;
    setcurrentSilverValue(currencyAmount / 10);
  }

  return (
    <CurrencyConverterContainer>
      <ExplainerLockup>
        <h1>Currency Converter</h1>
        <p>Convert a currency type to its value in gold</p>
      </ExplainerLockup>
      <CurrencyColumn>
        <p>Copper</p>
        <ConversionForm onSubmit={handleCopperConverterSubmission}>
          <CurrencyInput
            type='number'
            placeholder='Currency Amount'
            name='currencyAmount'
            id='currencyAmount'
          />
          <CurrencyColumnButton>Convert</CurrencyColumnButton>
        </ConversionForm>
        <CurrencyColumnOutput>= {currentCopperValue} Gold</CurrencyColumnOutput>
      </CurrencyColumn>

      <CurrencyColumn>
        <p>Silver</p>
        <ConversionForm onSubmit={handleSilverConverterSubmission}>
          <CurrencyInput
            type='number'
            placeholder='Currency Amount'
            name='currencyAmount'
            id='currencyAmount'
          />
          <CurrencyColumnButton>Convert</CurrencyColumnButton>
        </ConversionForm>
        <CurrencyColumnOutput>= {currentSilverValue} Gold</CurrencyColumnOutput>
      </CurrencyColumn>

      <TotalsLockup>
        <p>Converted Grand Total</p>
        <p>0</p>
      </TotalsLockup>
    </CurrencyConverterContainer>
  );
}

export default CurrencyConverter;
