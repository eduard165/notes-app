
# Note Taking App

This is a simple note-taking application built with React. It allows users to create, edit, delete, and archive/unarchive notes, as well as filter them by category. Notes are persisted locally using `localStorage`.

## Requirements

To run this application, you need to have the following installed:

- **Node.js** (v14.0.0 or later)
- **npm** (v6.0.0 or later)

## Installation

1. Clone the repository:
    ```bash
    git clone <repository-url>
    ```
2. Navigate to the project directory:
    ```bash
    cd note-taking-app
    ```
3. Run the following command to install the dependencies:
    ```bash
    npm install
    ```

## Running the Application

To start the application in development mode, run:

```bash
npm start
```

This will start the development server, and the application will be available at `http://localhost:3000`.

## Build

To create a production build of the application, run:

```bash
npm run build
```

This will generate static files for deployment in the `build` folder.

## Technologies Used

- **React** (v17.0.2)
- **React Bootstrap** (v2.0.0)
- **JavaScript/ES6**

## Features

- **Create Notes**: Write new notes with a title, content, and optional categories.
- **Edit Notes**: Modify the content of existing notes.
- **Delete Notes**: Remove notes permanently.
- **Archive and Unarchive Notes**: Archive notes for future reference and unarchive them as needed.
- **Filter Notes by Category**: Easily filter notes based on the categories they belong to.
- **Persist Notes in localStorage**: All notes are stored locally using `localStorage`, so they remain available even after refreshing the page.

## Project Structure

Here's an overview of the most important files and components in the project:

- **`src/App.js`**: Main application component that manages routes and handles the overall state of the app.
- **`src/pages/HomePage.js`**: Displays active notes and provides functionality to create, edit, delete, and archive notes.
- **`src/pages/ArchivedPage.js`**: Displays archived notes and allows users to unarchive or delete them.
- **`src/componentes/NoteEditor.js`**: Component used to create and edit notes, with title, content, and categories input.
- **`src/componentes/NoteList.js`**: Displays a list of notes, either active or archived.
- **`src/componentes/FilterBar.js`**: Provides category-based filtering functionality for notes.
- **`src/componentes/ConfirmationDialog.js`**: Shows a confirmation dialog before permanently deleting a note.

## LocalStorage Persistence

Notes are automatically saved to `localStorage` every time they are added, edited, archived, or deleted. This ensures that notes remain available across browser sessions. 
