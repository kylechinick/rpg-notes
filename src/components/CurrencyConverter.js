import React from 'react';

function CurrencyConverter() {
  function handleCurrencyConverterSubmission(event) {
    event.preventDefault();

    console.log();
    const currencyType = event.target.currencyType.value;
    const currencyAmount = event.target.currencyAmount.value;

    if (currencyType) {
      console.log(
        `Your total amount of ${currencyType} is worth ${
          currencyAmount / 2
        } in gold.`
      );
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
        <input type='text' placeholder='Currency Type' name='currencyType' />
        <input
          type='number'
          placeholder='Currency Amount'
          name='currencyAmount'
        />
        <button>Convert</button>
      </form>
    </React.Fragment>
  );
}

export default CurrencyConverter;
