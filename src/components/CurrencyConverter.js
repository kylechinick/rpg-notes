import React, { useState } from 'react';

function CurrencyConverter() {
  function handleCurrencyConverterSubmission(event) {
    event.preventDefault();

    console.log();
    const currencyType = event.target.currencyType.value;
    const currencyAmount = event.target.currencyAmount.value;

    switch (currencyType) {
      case 'copper':
        console.log(
          `Your total amount of ${currencyType} is worth ${
            currencyAmount / 100
          } in gold.`
        );
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
    <React.Fragment>
      <h1>Currency Converter</h1>
      <p>Convert a currency type to its value in gold</p>
      <form onSubmit={handleCurrencyConverterSubmission}>
        <input type='text' placeholder='Currency Type' name='currencyType' />
        <input
          type='number'
          placeholder='Currency Amount'
          name='currencyAmount'
        />
        <button>Convert</button>
      </form>
      <div>
        <p>Converted Silver</p>
        <p id='convertedSilver'>0</p>
      </div>
      <div>
        <p>Converted Grand Total</p>
        <p id='convertedGrandTotal'>0</p>
      </div>
    </React.Fragment>
  );
}

export default CurrencyConverter;
