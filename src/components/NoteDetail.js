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

const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
`;

const UpdateNoteButton = styled.button`
  background: none;
  border: 2px solid #333;
`;
const DeleteNoteButton = styled.button`
  background: none;
  border: 2px solid rgb(156, 2, 2);
  color: rgb(156, 2, 2);
`;
function NoteDetail(props) {
  const { note, onClickingDelete, onClickingEdit } = props;
  return (
    <>
      <NoteTitle
        as={motion.h1}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: 'easeOut', duration: 1 }}
      >
        Note Detail
      </NoteTitle>
      <h2>{note.name}</h2>
      <h3>Entry Type</h3>
      <p>{note.entryType}</p>
      <h3>Description</h3>
      <p>{note.noteText}</p>
      <ButtonsContainer
        as={motion.div}
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ ease: 'easeOut', duration: 1 }}
      >
        <UpdateNoteButton
          as={motion.button}
          whileHover={{
            scale: 1.1,
            type: 'tween'
          }}
          onClick={onClickingEdit}
        >
          Update Note
        </UpdateNoteButton>
        <DeleteNoteButton
          as={motion.button}
          whileHover={{
            scale: 1.1,
            type: 'tween'
          }}
          onClick={onClickingEdit}
        >
          Delete Note
        </DeleteNoteButton>
      </ButtonsContainer>
    </>
  );
}

NoteDetail.propTypes = {
  note: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default NoteDetail;
