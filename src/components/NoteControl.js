import React, { useEffect, useState } from 'react';
import NewNoteForm from './NewNoteForm';
import NoteList from './NoteList';
import EditNoteForm from './EditNoteForm';
import NoteDetail from './NoteDetail';
import {
  collection,
  addDoc,
  doc,
  updateDoc,
  onSnapshot,
  deleteDoc,
  query,
  orderBy
} from 'firebase/firestore';
import { db, auth } from '../firebase.js';
import { formatDistanceToNow } from 'date-fns';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const NotesAppContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  padding: 1rem;
  max-width: 80%;
`;

// const PrimaryActionButton = styled.button`
//   float: right;
// `;

function NoteControl() {
  const [formVisibleOnPage, setFormVisibleOnPage] = useState(false);
  const [mainNoteList, setMainNoteList] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);
  const [editing, setEditing] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    function updateNoteElapsedWaitTime() {
      const newMainNoteList = mainNoteList.map(note => {
        const newFormattedWaitTime = formatDistanceToNow(note.timeOpen);
        return { ...note, formattedWaitTime: newFormattedWaitTime };
      });
      setMainNoteList(newMainNoteList);
    }

    const waitTimeUpdateTimer = setInterval(
      () => updateNoteElapsedWaitTime(),
      60000
    );

    return function cleanup() {
      clearInterval(waitTimeUpdateTimer);
    };
  }, [mainNoteList]);

  useEffect(() => {
    const queryByTimestamp = query(
      collection(db, 'notes'),
      orderBy('timeOpen')
    );
    const unSubscribe = onSnapshot(
      queryByTimestamp,
      querySnapshot => {
        const notes = [];
        querySnapshot.forEach(doc => {
          const timeOpen = doc
            .get('timeOpen', { serverTimestamps: 'estimate' })
            .toDate();
          const jsDate = new Date(timeOpen);
          notes.push({
            name: doc.data().name,
            entryType: doc.data().entryType,
            noteText: doc.data().noteText,
            timeOpen: jsDate,
            formattedWaitTime: formatDistanceToNow(jsDate),
            id: doc.id
          });
        });
        setMainNoteList(notes);
      },
      error => {
        setError(error.message);
      }
    );

    return () => unSubscribe();
  }, []);

  const handleClick = () => {
    if (selectedNote != null) {
      setFormVisibleOnPage(false);
      setSelectedNote(null);
      setEditing(false);
    } else {
      setFormVisibleOnPage(!formVisibleOnPage);
    }
  };

  const handleDeletingNote = async id => {
    await deleteDoc(doc(db, 'notes', id));
    setSelectedNote(null);
  };

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleEditingNoteInList = async noteToEdit => {
    const noteRef = doc(db, 'notes', noteToEdit.id);
    await updateDoc(noteRef, noteToEdit);
    setEditing(false);
    setSelectedNote(null);
  };

  const handleAddingNewNoteToList = async newNoteData => {
    const collectionRef = collection(db, 'notes');
    await addDoc(collectionRef, newNoteData);
    setFormVisibleOnPage(false);
  };

  const handleChangingSelectedNote = id => {
    const selection = mainNoteList.filter(note => note.id === id)[0];
    setSelectedNote(selection);
  };

  if (auth.currentUser == null) {
    return (
      <React.Fragment>
        <h1>Sign in to view your saved session logs.</h1>
      </React.Fragment>
    );
  } else if (auth.currentUser != null) {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (error) {
      currentlyVisibleState = <p>There was an error: {error}</p>;
    } else if (editing) {
      currentlyVisibleState = (
        <EditNoteForm
          note={selectedNote}
          onEditNote={handleEditingNoteInList}
        />
      );
      buttonText = 'Return to Note List';
    } else if (selectedNote != null) {
      currentlyVisibleState = (
        <NoteDetail
          note={selectedNote}
          onClickingDelete={handleDeletingNote}
          onClickingEdit={handleEditClick}
        />
      );
      buttonText = 'Return to Note List';
    } else if (formVisibleOnPage) {
      currentlyVisibleState = (
        <NewNoteForm onNewNoteCreation={handleAddingNewNoteToList} />
      );
      buttonText = 'Return to Note List';
    } else {
      currentlyVisibleState = (
        <NoteList
          onNoteSelection={handleChangingSelectedNote}
          noteList={mainNoteList}
        />
      );
      buttonText = 'Add Note';
    }
    return (
      <NotesAppContainer>
        {currentlyVisibleState}
        {error ? null : (
          <motion.button
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ ease: 'easeOut', duration: 2 }}
            opacity
            onClick={handleClick}
            className='primaryActionButton'
          >
            {buttonText}
          </motion.button>
        )}
      </NotesAppContainer>
    );
  }
}

export default NoteControl;
