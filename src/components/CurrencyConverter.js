import React from 'react';
import styled from 'styled-components';

const ConversionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  padding: 1rem;
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
  // const [currentCurrencyValue, setcurrentCurrencyValue] = useState(null);

  function handleCurrencyConverterSubmission(event) {
    event.preventDefault();

    let convertedCurrencyOutput = document.querySelector(
      '#currencyAmountOutput'
    );

    const currencyType = event.target.currencyType.value;
    const currencyAmount = event.target.currencyAmount.value;

    switch (currencyType) {
      case 'copper':
        console.log(
          `Your total amount of ${currencyType} is worth ${
            currencyAmount / 100
          } in gold.`
        );
        convertedCurrencyOutput.text = currencyAmount;
        break;
      case 'silver':
        console.log(
          `Your total amount of ${currencyType} is worth ${
            currencyAmount / 10
          } in gold.`
        );
        break;
      case 'electrum':
        console.log(
          `Your total amount of ${currencyType} is worth ${
            currencyAmount / 2
          } in gold.`
        );
        break;
      case 'gold':
        console.log(
          `Your total amount of ${currencyType} is worth ${
            currencyAmount / 1
          } in gold.`
        );
        break;
      case 'platinum':
        console.log(
          `Your total amount of ${currencyType} is worth ${
            currencyAmount * 10
          } in gold.`
        );
        break;

      default:
        break;
    }
  }

  return (
    <ConversionContainer>
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
      <div>
        <p>Converted Silver</p>
        <p id='currencyAmountOutput'>0</p>
      </div>
      <div>
        <p>Converted Grand Total</p>
        <p id='convertedGrandTotal'>0</p>
      </div>
    </ConversionContainer>
  );
}

export default CurrencyConverter;
