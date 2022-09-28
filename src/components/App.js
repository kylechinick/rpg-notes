import React from 'react';
import Header from './Header';
import NoteControl from './NoteControl';
import SignIn from './SignIn';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/' element={<NoteControl />} />
      </Routes>
    </Router>
  );
}

export default App;
