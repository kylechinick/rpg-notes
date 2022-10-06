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
  const [currentCurrencyTotal, setcurrentCurrencyTotal] = useState(0);
  const [currentCopperValue, setcurrentCopperValue] = useState(0);
  const [currentSilverValue, setcurrentSilverValue] = useState(0);
  const [currentElectrumValue, setcurrentElectrumValue] = useState(0);
  const [currentGoldValue, setcurrentGoldValue] = useState(0);
  const [currentPlatinumValue, setcurrentPlatinumValue] = useState(0);

  function handleCurrencyConverterTotal(event) {
    setcurrentCurrencyTotal(
      currentCurrencyTotal +
        currentCopperValue +
        currentSilverValue +
        currentElectrumValue +
        currentGoldValue +
        currentPlatinumValue
    );
  }

  function handleCopperConverterSubmission(event) {
    event.preventDefault();
    const currencyAmount = parseInt(event.target.currencyAmount.value);
    setcurrentCopperValue(currencyAmount / 100);
  }

  function handleSilverConverterSubmission(event) {
    event.preventDefault();
    const currencyAmount = parseInt(event.target.currencyAmount.value);
    setcurrentSilverValue(currencyAmount / 10);
  }

  function handleElectrumConverterSubmission(event) {
    event.preventDefault();
    const currencyAmount = parseInt(event.target.currencyAmount.value);
    setcurrentElectrumValue(currencyAmount / 2);
  }

  function handleGoldConverterSubmission(event) {
    event.preventDefault();
    const currencyAmount = parseInt(event.target.currencyAmount.value);
    setcurrentGoldValue(currencyAmount / 1);
  }

  function handlePlatinumConverterSubmission(event) {
    event.preventDefault();
    const currencyAmount = parseInt(event.target.currencyAmount.value);
    setcurrentPlatinumValue(currencyAmount * 10);
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
      <CurrencyColumn>
        <p>Electrum</p>
        <ConversionForm onSubmit={handleElectrumConverterSubmission}>
          <CurrencyInput
            type='number'
            placeholder='Currency Amount'
            name='currencyAmount'
            id='currencyAmount'
          />
          <CurrencyColumnButton>Convert</CurrencyColumnButton>
        </ConversionForm>
        <CurrencyColumnOutput>
          = {currentElectrumValue} Gold
        </CurrencyColumnOutput>
      </CurrencyColumn>
      <CurrencyColumn>
        <p>Gold</p>
        <ConversionForm onSubmit={handleGoldConverterSubmission}>
          <CurrencyInput
            type='number'
            placeholder='Currency Amount'
            name='currencyAmount'
            id='currencyAmount'
          />
          <CurrencyColumnButton>Convert</CurrencyColumnButton>
        </ConversionForm>
        <CurrencyColumnOutput>= {currentGoldValue} Gold</CurrencyColumnOutput>
      </CurrencyColumn>
      <CurrencyColumn>
        <p>Platinum</p>
        <ConversionForm onSubmit={handlePlatinumConverterSubmission}>
          <CurrencyInput
            type='number'
            placeholder='Currency Amount'
            name='currencyAmount'
            id='currencyAmount'
          />
          <CurrencyColumnButton>Convert</CurrencyColumnButton>
        </ConversionForm>
        <CurrencyColumnOutput>
          = {currentPlatinumValue} Gold
        </CurrencyColumnOutput>
      </CurrencyColumn>
      <TotalsLockup>
        <p>Converted Grand Total</p>
        <p id='grandTotalOutput'>{currentCurrencyTotal} Gold</p>
        <button onClick={handleCurrencyConverterTotal}>Calculate Total</button>
      </TotalsLockup>
    </CurrencyConverterContainer>
  );
}

export default CurrencyConverter;
