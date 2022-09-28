import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

function NoteDetail(props) {
  const { note, onClickingDelete, onClickingEdit } = props;
  return (
    <>
      <h1>Note Detail</h1>
      <h2>{note.name}</h2>
      <h3>Origin</h3>
      <p>{note.origin}</p>
      <h3>Description</h3>
      <p>{note.issue}</p>
      <button onClick={onClickingEdit}>Update Note</button>
      <button onClick={() => onClickingDelete(note.id)}>Delete Note</button>
    </>
  );
}

NoteDetail.propTypes = {
  note: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default NoteDetail;
