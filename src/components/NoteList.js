import React from 'react';
import Note from './Note';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

function NoteList(props) {
  return (
    <>
      {props.noteList.map(note => (
        <Note
          whenNoteClicked={props.onNoteSelection}
          name={note.name}
          entryType={note.entryType}
          formattedWaitTime={note.formattedWaitTime}
          noteText={note.noteText}
          id={note.id}
          key={note.id}
        />
      ))}
    </>
  );
}

NoteList.propTypes = {
  noteList: PropTypes.array,
  onNoteSelection: PropTypes.func
};

export default NoteList;
