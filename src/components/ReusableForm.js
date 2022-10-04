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
  padding: 0.5rem;
`;

const NoteTextAreaInput = styled.textarea`
  margin-bottom: 1rem;
  padding: 0.5rem;
`;

const SubmitNoteButton = styled.button`
  margin-bottom: 1rem;
`;

// const EntryTypeOptionsContainer = styled.div``;
// const EntryTypeOption = styled.input`
//   margin: 1rem;
// `;

function ReusableForm(props) {
  return (
    <>
      <NoteForm onSubmit={props.formSubmissionHandler}>
        {/* <EntryTypeOptionsContainer>
          <EntryTypeOption type='radio' name='entry-type' id='new-character' />
          New Character
          <EntryTypeOption type='radio' name='entry-type' id='found-loot' />
          Fount Loot
        </EntryTypeOptionsContainer> */}
        <NoteTextInput type='text' name='name' placeholder='Note name' />
        <NoteTextInput type='text' name='entryType' placeholder='Entry type' />
        <NoteTextInput type='text' name='charName' placeholder='Character Name' />
        <NoteTextInput type='file' name='charName' placeholder='Image Uploader' />
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
