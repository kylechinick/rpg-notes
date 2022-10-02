import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { motion } from 'framer-motion';
// import { motion, AnimatePresence } from 'framer-motion';

const NoteTitle = styled.h1`
  margin-bottom: 1rem;
  text-transform: uppercase;
  font-weight: 900;
`;

function NoteDetail(props) {
  const { note, onClickingDelete, onClickingEdit } = props;
  return (
    <>
      <NoteTitle>Note Detail</NoteTitle>
      <h2>{note.name}</h2>
      <h3>Entry Type</h3>
      <p>{note.entryType}</p>
      <h3>Description</h3>
      <p>{note.noteText}</p>
      <motion.button
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ ease: 'easeOut', duration: 2 }}
        onClick={onClickingEdit}
      >
        Update Note
      </motion.button>
      <motion.button
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ ease: 'easeOut', duration: 2 }}
        onClick={() => onClickingDelete(note.id)}
      >
        Delete Note
      </motion.button>
    </>
  );
}

NoteDetail.propTypes = {
  note: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default NoteDetail;
