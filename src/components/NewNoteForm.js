import React from 'react';
import PropTypes from 'prop-types';
import ReusableForm from './ReusableForm';
import { serverTimestamp } from 'firebase/firestore';

function NewNoteForm(props) {
  function handleNewNoteFormSubmission(event) {
    event.preventDefault();
    props.onNewNoteCreation({
      name: event.target.name.value,
      entryType: event.target.entryType.value,
      noteText: event.target.noteText.value,
      timeOpen: serverTimestamp()
    });
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleNewNoteFormSubmission}
        buttonText='Add New Note'
      />
    </React.Fragment>
  );
}

NewNoteForm.propTypes = {
  onNewNoteCreation: PropTypes.func
};

export default NewNoteForm;
