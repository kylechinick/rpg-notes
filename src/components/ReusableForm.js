import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

function ReusableForm(props) {
  return (
    <>
      <form onSubmit={props.formSubmissionHandler}>
        <input type='text' name='name' placeholder='Note name' />
        <input type='text' name='origin' placeholder='Note origin' />
        <textarea name='issue' placeholder='Note description' />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;
