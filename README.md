# RPG Notes: The Tattered Tome

AuthorBy _**Kyle Chinick**_

## Summary

The goal of this app is to provide users an easier way to log the events, new characters and information encountered while playing a tabletop RPG.

## Description

This app provides users an easy way to take notes and keep a record of what happened during a tabletop RPG session.

### Notes

While there are many platforms for managing and playing RPGs (i.e. Roll20) and even more apps built solely for note-taking most apps in these categories do a subpar job of facilitating a quick and easy note-taking process tailored to the type of information a player likely wants to record druring an RPG session.

_Please note that the following block-quoted paragraphs describe app functionality that is still under development. The app's current note-taking functionality uses a single note entry-type but I'm excited to offer more robust options in the near future._

> In contrast, this tool aims to not only provide users with the ability to enter text into a text-field (as any standard note-taking app should) but it also minimizes the amount of friction encountered while trying to hurriedly take notes mid-game by supplying the user with a number of quick-select note entry-types.
>
> Quick-select entry-types account for common events and types of information that are typically encountered in a tabletop RPG. Having immediate access to a pre-formatted note – which prompts the user for basic information relevant to the given entry type - minimizes the amount of time spent thinking about what information to capture and how to best format that info. This allows the player to keep up with the action without being bogged down by thinking through what types of information to capture and how best to organize that information.

### WIP Walkthrough

The homepage provides links immediately create a new session log, view a collection of current campaign logs, access an item-storage manifest, and access a bank ledger (which includes an game-currency-converter tool).

#### Session Logs

The main feature a user will interact with is the session log.

A session log represents the journal entries for a single RPG session. Playing a game on Thursday? You'll create and save a session log for Thursday's game. Playing again on Saturday? You'll create a separate session log for Saturday.

#### Campaigns

All session logs are collected into a campaign component which displays all the session logs in a list that the user can interact with to view, edit, or delete logs as needed.

#### Entry-Types

Entries are saved to a session log.

To reduce note-taking friction the app provides the user with several entry-types to speed up the recording process.

- Text:
  - A freeform text field. Provides a simple text box that the user can save a basic text note to.
- New Character
  - Optional image upload tool for art of the newly-met character.
  - Individual text fields for the following:
    - Name
    - Occupation
    - Race and/or Class
    - Location Met
    - Alignment
- New Quest
- Combat Encounter
- Quest Completed
- Loot Found

---

## Technologies Used

- _HTML / CSS_
- _Node_
- _React_
- _JavaScript / JSX_
- _Firebase / Firestore_

---

## Setup/Installation Requirements

1. Clone this repository to your desktop by executing `git clone https://github.com/kylechinick/rpg-notes.git` in your preferred terminal application.

2. In the terminal, cd into the project directory then execute `npm install`.

3. Execute `npm run start` to build and then run a development version of the app on your local machine.

---

## Known Bugs

- N/A
