import React from 'react';
import ReusableForm from './ReusableForm';
import EditableForm from './EditableForm';
import PropTypes from 'prop-types';

function EditNoteForm(props) {
  const { note } = props;

  function handleEditNoteFormSubmission(event) {
    event.preventDefault();
    props.onEditNote({
      name: event.target.name.value,
      origin: event.target.origin.value,
      issue: event.target.issue.value,
      id: note.id
    });
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleEditNoteFormSubmission}
        buttonText='Update Note'
      />
    </React.Fragment>
  );
}

EditNoteForm.propTypes = {
  onEditNote: PropTypes.func,
  note: PropTypes.object
};

export default EditNoteForm;
