# Task Board

A simple, responsive, and persistent task management web application built for a frontend developer assessment.

## Features

- **Create Tasks:** Add new tasks with titles, descriptions, priorities, statuses, and due dates.
- **Edit Tasks:** Update existing tasks easily.
- **Delete Tasks:** Remove tasks safely with a confirmation dialog.
- **Search & Filter:** Instantly filter tasks by typing their title or selecting a specific status.
- **Data Persistence:** All tasks are automatically saved to your browser's `localStorage` so you never lose data on a page refresh.
- **Responsive Design:** A clean, professional UI that works beautifully on desktop and mobile.

## Tech Stack

- **Framework:** Next.js 13+ (App Router)
- **UI / Styling:** Tailwind CSS
- **State Management:** Pure React Hooks (`useState`, `useEffect`) without external state libraries.
- **Persistence:** Browser `localStorage`

## Getting Started

1. Clone or download this repository.
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.
