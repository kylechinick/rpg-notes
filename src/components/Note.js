import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

function Note(props) {
  return (
    <>
      <div onClick={() => props.whenNoteClicked(props.id)}>
        <h1>{props.name}</h1>
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
