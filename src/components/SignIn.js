import React, { useState } from 'react';
import { auth } from './../firebase.js';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AccountContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  padding: 1rem;
  max-width: 800px;
`;

const NotesListTitle = styled.h1`
  margin-bottom: 1rem;
  text-transform: uppercase;
  font-weight: 900;
`;

const AccountForm = styled.form`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;
const AccountInput = styled.input`
  margin-top: 1rem;
  margin-right: 1rem;
  margin-bottom: 1rem;
  padding: 0.5rem;
  height: 2.5rem;
  border-radius: 6px;
`;

const AccountButton = styled.button`
  background: none;
  border: 2px solid #333;
`;

const SignOutButton = styled.button`
  // margin-top: 1rem;
  width: fit-content;
  font-size: 1.2rem;
  border: 2px solid rgb(156, 2, 2);
  color: rgb(156, 2, 2);
  background: none;
`;

function SignIn() {
  const [signUpSuccess, setSignUpSuccess] = useState(null);
  const [signInSuccess, setSignInSuccess] = useState(null);
  const [signOutSuccess, setSignOutSuccess] = useState(null);

  function doSignUp(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        setSignUpSuccess(
          `You've successfully signed up, ${userCredential.user.email}!`
        );
      })
      .catch(error => {
        setSignUpSuccess(`There was an error signing up: ${error.message}!`);
      });
  }

  function doSignIn(event) {
    event.preventDefault();
    const email = event.target.signinEmail.value;
    const password = event.target.signinPassword.value;
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        setSignInSuccess(
          `You've successfully signed in as ${userCredential.user.email}!`
        );
      })
      .catch(error => {
        setSignInSuccess(`There was an error signing in: ${error.message}!`);
      });
  }

  function doSignOut() {
    signOut(auth)
      .then(function () {
        setSignOutSuccess('You have successfully signed out!');
      })
      .catch(function (error) {
        setSignOutSuccess(`There was an error signing out: ${error.message}!`);
      });
  }

  return (
    <AccountContainer>
      <NotesListTitle
        as={motion.h1}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: 'easeOut', duration: 1 }}
      >
        Account
      </NotesListTitle>
      <h2>Sign Up</h2>
      {signUpSuccess}
      <AccountForm onSubmit={doSignUp}>
        <AccountInput type='text' name='email' placeholder='Email' />
        <AccountInput type='password' name='password' placeholder='Password' />
        <AccountButton type='submit'>Sign Up</AccountButton>
      </AccountForm>
      <h2>Sign In</h2>
      {signInSuccess}
      <AccountForm onSubmit={doSignIn}>
        <AccountInput type='text' name='signinEmail' placeholder='Email' />
        <AccountInput
          type='password'
          name='signinPassword'
          placeholder='Password'
        />
        <AccountButton type='submit'>Sign In</AccountButton>
      </AccountForm>
      <h2>Sign Out</h2>
      {signOutSuccess}
      <AccountForm>
        <SignOutButton onClick={doSignOut}>Sign out</SignOutButton>
      </AccountForm>
    </AccountContainer>
  );
}

export default SignIn;
