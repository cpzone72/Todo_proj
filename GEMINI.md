# Project Context: Gemini Todo App

## Building and Running

- **Install Dependencies:** `npm install`
- **Run in Development:** `npm start`
  - Runs the app in development mode at [http://localhost:3000](http://localhost:3000).
  - The page will reload if you make edits.
- **Build for Production:** `npm run build`
  - Builds the app for production to the `build` folder.
  - Bundles React in production mode and optimizes for performance.
- **Eject Configuration:** `npm run eject`
  - **Note:** One-way operation. Removes the single build dependency and copies configuration files.

## Testing and Quality

- **Test Commands:**
  - **Unit (All):** `npm test`
    - Launches the test runner in the interactive watch mode.
- **Linting:** Standard Create React App ESLint configuration is used (`react-app`).

## Development Conventions

- **Tech Stack:** React 19, TypeScript, Bootstrap 5.
- **State Management:**
  - Uses `useState` for local state and `useEffect` for persistence.
  - Data is persisted to `localStorage` with the key `'todos'`.
- **Styling:**
  - **Bootstrap:** Used for layout and core components (via `bootstrap` and `bootstrap-icons` packages).
  - **Custom CSS:** Located in `App.css` for app-specific overrides.
- **Project Structure:**
  - `src/App.tsx`: Main application controller.
  - `src/components/`: Reusable UI components (`TodoForm`, `TodoItem`, `FilterButtons`).
  - `src/types.ts`: Shared TypeScript interfaces (`Todo`, `FilterType`).
- **Language:** The user interface text is in **Korean**.

## Testing Conventions

- **Framework:** Jest (via `react-scripts`).
- **Library:** `@testing-library/react` for component testing.
- **Location:** Tests are co-located with components (e.g., `App.test.tsx`).

## Documentation

- **Primary:** `README.md` (Create React App standard docs).
- **Context:** `GEMINI.md` (This file, for AI context).
