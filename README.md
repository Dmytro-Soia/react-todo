# React Todo List

## Setup

### 1. Install [pnpm](https://pnpm.io/installation#using-npm) package manager:

```bash
npm install -g pnpm@latest-10
```

### 2. Clone repository:

```bash
git@github.com:Dmytro-Soia/react-todo.git
```

### 3. Move to the project repository:

```bash
cd react-todo
```

### 4. Install the dependencies:

```bash
pnpm i
```

## Usage CLI

Start the dev server:

```bash
pnpm dev
```

Format all projects files:

```bash
pnpm format
```

Run [biome](https://biomejs.dev/) linter, and catch
some errors:

```bash
pnpm lint
```

Build the app for production:

```bash
pnpm build
```

Preview the production build locally:

```bash
pnpm preview
```

## Features

- **Add Todo with date/Category with color**
- **Delete Todo/Categorie**
- **Select category to each Todo**
- **Marking todo _checked_/_unchecked_**
- **Edit Todo _title_/_date_/_category_**
- **Sort todos by _name_/_date_/_done_/_undone_**

## Technology used

- Languages:

  - React
    - useState: for state managment
    - Zustand: for state managment
  - TypeScript: for static typing

- API and Request:

  - Fecth API: for making HTTPS request
  - PostgREST API: for interacting with a RESTful API based on PostgreSQL
  - Swagger: for testing and documentation API

- Styling:
  -CSS
