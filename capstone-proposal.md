# Capstone Proposal

## Student Name

Kyle Chinick

---

## Project Name

RPG Notes | _WIP name_

## Project Goal

Provide users an easy way to log the events, new characters and information found while playing a tabletop RPG.

---

## MVP Features

### Roles and Data Persistence

As a user I can:

- Create an account.
- Log into my account.
- Create and save new session logs to my account.
- Retrieve and edit session logs after logging out and the logging back in.

### Homepage View

- After logging in, I can see a card (visual stack of "logs") of my session logs with a minimal preview of the most recent log being visible on top of the stack.

- I can click a button to start a new session log right from the homepage.

- Clicking the session logs card opens a view of all session logs where I can select and open a specific log to view or edit it or I can start a new log from clicking a single button.

- I can see a card to open the bank view.

- I can see a card to open the storage view.

### Session Logs

As a user:

A session log allows me to add multiple types of log entries which are saved to the session log in the order that they are created.

#### Log Entry Types

- Image
- Plain text
- Character met
- Combat encounter
- Loot found
- Quest obtained
- Quest completed
- Puzzle/mystery discovered

### Bank

- Displays a table of current currency stores on-person and in "the bank". Can be edited at any time.
- Includes a game currency converter which the user can edit the conversion rates for at any time.

### Storage

- Displays a table of items in storage, with columns for item name, value, description, attibutes/damage/etc., location found, and owner (in the event your character is storing an item for another character or managing storage for all characters)

---

## Tools, Frameworks, Libraries, APIs, Modules and Other Resources

- HTML
- CSS
- JavaScript
- Node.js
- JSX
- React

---

## Post-MVP Roadmap

- Support more robust log entry type prompts:
  - Creating a "Character Met" entry, for example, should prompt the user for entry-type-relevant data like an image of the character, name, location met, occupation...
  - The "quest obtained" entry-type should include prompts for a quest description, where/who the quest was obtained from, requirements for complete, reward promised...
  - Etc.

---

## Post-MVP Tools

- TBD

---

## Additional Information for Instructor

- TBD
