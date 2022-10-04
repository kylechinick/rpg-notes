import React from 'react';

function CurrencyConverter() {
  function handleCurrencyConverterSubmission(event) {
    event.preventDefault();

    const currencyType = document.querySelector('#currency-type');
    const currencyAmount = document.querySelector('#currency-amount');

    if (currencyType) {
      console.log(currencyAmount / 2);
    }

    // switch (currency-type) {
    //   case 'silver':

    //     break;

    //   default:
    //     break;
    // }
  }

  return (
    <React.Fragment>
      <h1>Currency Converter</h1>
      <p>Convert a currency type to its value in gold</p>
      <form onSubmit={handleCurrencyConverterSubmission}>
        <input type='text' placeholder='Currency Type' id='currency-type' />
        <input
          type='number'
          placeholder='Currency Amount'
          name='currency-amount'
        />
        <button>Convert</button>
      </form>
    </React.Fragment>
  );
}

export default CurrencyConverter;
