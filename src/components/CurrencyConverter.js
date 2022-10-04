import React from 'react';

function CurrencyConverter() {
  function handleCurrencyConverterSubmission(event) {
    event.preventDefault();
  }

  return (
    <React.Fragment>
      <form>
        <input type="text" placeholder='currency' />
        <input type="number" name="currency-amount" />

      </form>

    </React.Fragment>
  )
}

export default CurrencyConverter;