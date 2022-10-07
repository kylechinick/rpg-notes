# RPG Notes: The Tattered Tome

Authored By _**Kyle Chinick**_

## Summary

The Tattered Tome app provide users an easier way to log the events, new characters and information encountered while playing a tabletop RPG.

## Description

This app provides users an easy way to take notes and keep a record of what happened during a tabletop RPG session.

### Notes

While there are many platforms for managing and playing RPGs (i.e. Roll20) and even more apps built solely for note-taking most apps in these categories do a subpar job of facilitating a quick and easy note-taking process tailored to the type of information a player likely wants to record druring an RPG session.

_Please note that the following block-quoted paragraphs describe app functionality that is still under development. The app's current note-taking functionality uses a single note entry-type but I'm excited to offer more robust options in the near future._

> In contrast, this tool aims to not only provide users with the ability to enter text into a text-field (as any standard note-taking app should) but it also minimizes the amount of friction encountered while trying to hurriedly take notes mid-game by supplying the user with a number of quick-select note entry-types.
>
> Quick-select entry-types account for common events and types of information that are typically encountered in a tabletop RPG. Having immediate access to a pre-formatted note – which prompts the user for basic information relevant to the given entry type - minimizes the amount of time spent thinking about what information to capture and how to best format that info. This allows the player to keep up with the action without being bogged down by thinking through what types of information to capture and how best to organize that information.

Currently, users can create notes via a form with several different types inputs, each dedicated to information that is likely to be noted for a typical RPG note.

Full CRUD functionality exists for this notes feature. Users can create notes, edit those saved notes, and delete saved notes.

Notes are saved to a Firestore database provided by Firebase (which persists the CRUD functionality mentioned above).

In order to create and save notes users must first create an account and then log into that account. This authentication process is also managed through Firebase's suite of tools and methods.

### Utilities

In addition to the primary note taking feature of this app, several utilitiy mini-apps will also be present in future versions.

#### Currency Converter

The utility app bundled into the current version of The Tattered Tome provides a simple in-game-currency conversion tool.

Users can enter an amount of currency into the appropriate currency input to calculate that currency's equivilent value in gold. Users can also calculate a grand total of all converted currencies that have been entered into the provided inputs.

---

## Technologies Used

- HTML / CSS
- Node
- React
- JavaScript / JSX
- Firebase / Firestore
- Framer Motion
- Styled Components

---

## Setup/Installation Requirements

1. Clone this repository to your desktop by executing `git clone https://github.com/kylechinick/rpg-notes.git` in your preferred terminal application.

2. In the terminal, cd into the project directory then execute `npm install`.

3. Execute `npm run start` to build and then run a development version of the app on your local machine.

---

## Known Bugs

- Selecting "Calculate Total" in the currency converter tool will cause the function to repeatedly add whatever currency values are available each time the button is clicked, even if no values were changed. This results in an inaccurate total if the button is clicked more than one time.
- Empty field forms can be submitted which results in rendering the field title for the note despite having no content associated with it.
