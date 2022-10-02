import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const NoteTitle = styled.h1`
  color: red;
`;

function Note(props) {
  return (
    <>
      <div onClick={() => props.whenNoteClicked(props.id)}>
        <NoteTitle>{props.name}</NoteTitle>
        <h2>Entry Type</h2>
        <p>{props.entryType}</p>
        <h2>Description</h2>
        <p>{props.noteText}</p>
        <p>Note Added: {props.formattedWaitTime} ago</p>
      </div>
    </>
  );
}

Note.propTypes = {
  name: PropTypes.string,
  entryType: PropTypes.string,
  noteText: PropTypes.string,
  formattedWaitTime: PropTypes.string,
  id: PropTypes.string,
  whenNoteClicked: PropTypes.func
};

export default Note;
