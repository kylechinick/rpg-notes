import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const NoteForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
`;

const NoteTextInput = styled.input`
  margin-bottom: 1rem;
`;

const NoteTextAreaInput = styled.textarea`
  margin-bottom: 1rem;
`;

const SubmitNoteButton = styled.button`
  margin-bottom: 1rem;
`;

function ReusableForm(props) {
  return (
    <>
      <NoteForm onSubmit={props.formSubmissionHandler}>
        <NoteTextInput type='text' name='name' placeholder='Note name' />
        <NoteTextInput type='text' name='entryType' placeholder='Entry type' />
        <NoteTextAreaInput
          name='noteText'
          placeholder='We encountered a dragon that is not a fan of dungeons... '
        />
        <SubmitNoteButton type='submit'>{props.buttonText}</SubmitNoteButton>
      </NoteForm>
    </>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;
