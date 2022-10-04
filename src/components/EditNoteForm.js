import React from 'react';
import ReusableForm from './ReusableForm';
// import EditableForm from './EditableForm';
import PropTypes from 'prop-types';

function EditNoteForm(props) {
  const { note } = props;

  // console.log(note);

  function handleEditNoteFormSubmission(event) {
    event.preventDefault();
    props.onEditNote({
      name: event.target.name.value,
      entryType: event.target.entryType.value,
      charName: event.target.charName.value,
      supportingImage: event.target.supportingImage.value,
      noteText: event.target.noteText.value,
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
