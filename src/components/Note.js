import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const NotePreviewContainer = styled.div`
  margin-bottom: 1rem;
  &:hover {
    cursor: pointer;
    opacity: 0.6;
  }
  // &.active {
  //   color: red;
  // }:
`;

const NoteTitle = styled.h2`
  // color: red;
`;

const NoteSubtitle = styled.h3`
  // color: red;
`;

const NoteFinePrint = styled.p`
  font-weight: 300;
`;

function Note(props) {
  return (
    <NotePreviewContainer onClick={() => props.whenNoteClicked(props.id)}>
      <NoteTitle>{props.name}</NoteTitle>
      <NoteSubtitle>Entry Type</NoteSubtitle>
      <p>{props.entryType}</p>
      <NoteSubtitle>Description</NoteSubtitle>
      <p>{props.noteText}</p>
      <NoteFinePrint>Note Added: {props.formattedWaitTime} ago</NoteFinePrint>
    </NotePreviewContainer>
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
