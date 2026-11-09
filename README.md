
# Personal Project Showcase App
 
A single-page React app for showcasing personal projects. You can add new projects with a form, browse them in a list, and filter them with a live search box. The layout is responsive and works on phone and desktop widths.
 
## Features
 
- **Project list:** shows each project with an image placeholder, a title and a description.
- **Add Project form:** a title input and a description textarea. Empty submissions are blocked.
- **Search filter:** type in the search box to filter projects by title. The search is not case-sensitive.
- **Responsive design:** project cards stack on small screens.
## Tech Stack
 
- React (with hooks)
- Vite
- Bootstrap 5 (loaded in `App.css`) plus custom CSS
## Getting Started
 
1. Clone the repository:
```bash
   git clone <your-repo-url>
   cd portfolio-platform
```
 
2. Install dependencies:
```bash
   npm install
```
 
3. Start the development server:
```bash
   npm run dev
```
 
4. Open the local address shown in the terminal (usually `http://localhost:5173`).
Bootstrap is loaded from a CDN, so an internet connection is needed for the full styling.
 
## Component Structure
 
```
App
├── Header
├── ProjectForm
└── (search card)
    ├── SearchBar
    └── ProjectList
        └── ProjectCard
```
 
| Component | Role |
|-----------|------|
| `App` | Owns the `projects` and `searchTerm` state, computes the filtered list, and defines `handleAddProject`. |
| `Header` | Displays the app title. |
| `ProjectForm` | Controlled form with local `title` and `description` state. Validates input and calls `onAddProject` on submit. |
| `SearchBar` | Controlled input. Receives `searchTerm` and `onSearchChange` as props. |
| `ProjectList` | Receives the filtered projects and renders one `ProjectCard` per project. |
| `ProjectCard` | Displays a single project's image placeholder, title and description. |
 
## State Management
 
- `projects` (in `App`): the array of project objects (`id`, `title`, `description`).
- `searchTerm` (in `App`): the current text in the search box.
- `filteredProjects` (in `App`): derived from `projects` and `searchTerm` on each render, not stored in state.
- `title` and `description` (in `ProjectForm`): the form's input values.
## Data Flow
 
1. `ProjectForm` calls `onAddProject` with the new title and description.
2. `App` adds an `id` and sets a new array containing the old projects plus the new one.
3. `SearchBar` calls `onSearchChange` with the typed text, which updates `searchTerm` in `App`.
4. `App` passes `filteredProjects` down to `ProjectList`, which passes each project's details to `ProjectCard`.
## Author
 
Maya