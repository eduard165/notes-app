# Note Taking App

This is a simple note-taking application built with React. It allows users to create, edit, and delete notes, as well as archive/unarchive them and filter them by category.

## Requirements

To run this application, you need to have the following installed:

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)

## Installation

1. Clone the repository
2. Navigate to the project directory
3. Run `npm install` to install the dependencies

## Running the Application

To start the application, run the following command in the project directory:

```
npm start
```

This will start the development server, and the application will be available at `http://localhost:3000`.

## Build

To create a production build, run:

```
npm run build
```

## Technologies Used

- React 17.0.2
- React Bootstrap 2.0.0
- TypeScript 4.4.2

## Features

- Create, edit, and delete notes
- Archive and unarchive notes
- Filter notes by category
- Persist notes in localStorage

## Project Structure

- `src/App.tsx`: Main component and context provider
- `src/NoteList.tsx`: Component to display the list of notes
- `src/NoteItem.tsx`: Component for individual note display
- `src/NoteForm.tsx`: Component for creating and editing notes
- `src/CategoryFilter.tsx`: Component for filtering notes by category