import React from 'react';
import Note from './Note';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ListContainer = styled.div`
  //
`;

const NotesListTitle = styled.h1`
  margin-bottom: 1rem;
  text-transform: uppercase;
  font-weight: 900;
`;

function NoteList(props) {
  return (
    <ListContainer>
      <NotesListTitle>All Notes</NotesListTitle>
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
    </ListContainer>
  );
}

NoteList.propTypes = {
  noteList: PropTypes.array,
  onNoteSelection: PropTypes.func
};

export default NoteList;
