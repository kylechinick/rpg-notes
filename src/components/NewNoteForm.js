import React from 'react';
import PropTypes from 'prop-types';
import ReusableForm from './ReusableForm';
import { serverTimestamp } from 'firebase/firestore';

function NewNoteForm(props) {
  function handleNewNoteFormSubmission(event) {
    event.preventDefault();
    props.onNewNoteCreation({
      name: event.target.name.value,
      origin: event.target.origin.value,
      issue: event.target.issue.value,
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
