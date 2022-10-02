import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const NoteTitle = styled.h1`
  color: red;
`;

function NoteDetail(props) {
  const { note, onClickingDelete, onClickingEdit } = props;
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.2,
          ease: [0, 0.71, 0.2, 1.01]
        }}
      >
        <NoteTitle>Note Detail</NoteTitle>
        <h2>{note.name}</h2>
        <h3>Entry Type</h3>
        <p>{note.entryType}</p>
        <h3>Description</h3>
        <p>{note.noteText}</p>
        <button onClick={onClickingEdit}>Update Note</button>
        <button onClick={() => onClickingDelete(note.id)}>Delete Note</button>
      </motion.div>
    </>
  );
}

NoteDetail.propTypes = {
  note: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default NoteDetail;
