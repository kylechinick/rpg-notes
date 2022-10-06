import React, { useState } from 'react';
import styled from 'styled-components';

const ExplainerLockup = styled.div`
  width: 100%;
  margin-bottom: 1rem;
  // border 2px solid blue;
`;

const CurrencyConverterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  // flex-direction: column;
  // width: 80%;

  padding: 1rem;
  // border: 2px solid green;
`;

const CurrencyCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0.5rem;
  padding: 1rem;
  background: rgb(226, 219, 199);
  border-radius: 6px;
`;

const CurrencyCardTitle = styled.p`
  font-size: 1.4rem;
  font-weight: 700;
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

const CurrencyCardButton = styled.button`
  margin-left: 1rem;
  background: none;
  border: 2px solid #333;
`;

const CurrencyCardOutput = styled.p`
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

const TotalsLockupTitle = styled.h2``;

const TotalsLockupOutput = styled.p`
  font-size: 1.4rem;
`;

const TotalsLockupButton = styled.button`
  margin-left: 1rem;
  background: none;
  border: 2px solid #333;
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
      <CurrencyCard>
        <CurrencyCardTitle>Copper</CurrencyCardTitle>
        <ConversionForm onSubmit={handleCopperConverterSubmission}>
          <CurrencyInput
            type='number'
            placeholder='Currency Amount'
            name='currencyAmount'
          />
          <CurrencyCardButton>Convert</CurrencyCardButton>
        </ConversionForm>
        <CurrencyCardOutput>= {currentCopperValue} Gold</CurrencyCardOutput>
      </CurrencyCard>
      <CurrencyCard>
        <CurrencyCardTitle>Silver</CurrencyCardTitle>
        <ConversionForm onSubmit={handleSilverConverterSubmission}>
          <CurrencyInput
            type='number'
            placeholder='Currency Amount'
            name='currencyAmount'
            id='currencyAmount'
          />
          <CurrencyCardButton>Convert</CurrencyCardButton>
        </ConversionForm>
        <CurrencyCardOutput>= {currentSilverValue} Gold</CurrencyCardOutput>
      </CurrencyCard>
      <CurrencyCard>
        <CurrencyCardTitle>Electrum</CurrencyCardTitle>
        <ConversionForm onSubmit={handleElectrumConverterSubmission}>
          <CurrencyInput
            type='number'
            placeholder='Currency Amount'
            name='currencyAmount'
            id='currencyAmount'
          />
          <CurrencyCardButton>Convert</CurrencyCardButton>
        </ConversionForm>
        <CurrencyCardOutput>= {currentElectrumValue} Gold</CurrencyCardOutput>
      </CurrencyCard>
      <CurrencyCard>
        <CurrencyCardTitle>Gold</CurrencyCardTitle>
        <ConversionForm onSubmit={handleGoldConverterSubmission}>
          <CurrencyInput
            type='number'
            placeholder='Currency Amount'
            name='currencyAmount'
            id='currencyAmount'
          />
          <CurrencyCardButton>Convert</CurrencyCardButton>
        </ConversionForm>
        <CurrencyCardOutput>= {currentGoldValue} Gold</CurrencyCardOutput>
      </CurrencyCard>
      <CurrencyCard>
        <CurrencyCardTitle>Platinum</CurrencyCardTitle>
        <ConversionForm onSubmit={handlePlatinumConverterSubmission}>
          <CurrencyInput
            type='number'
            placeholder='Currency Amount'
            name='currencyAmount'
            id='currencyAmount'
          />
          <CurrencyCardButton>Convert</CurrencyCardButton>
        </ConversionForm>
        <CurrencyCardOutput>= {currentPlatinumValue} Gold</CurrencyCardOutput>
      </CurrencyCard>
      <TotalsLockup>
        <TotalsLockupTitle>Converted Grand Total</TotalsLockupTitle>
        <TotalsLockupOutput>{currentCurrencyTotal} Gold</TotalsLockupOutput>
        <TotalsLockupButton onClick={handleCurrencyConverterTotal}>
          Calculate Total
        </TotalsLockupButton>
      </TotalsLockup>
    </CurrencyConverterContainer>
  );
}

export default CurrencyConverter;
