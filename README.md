# IdeaGram

**IdeaGram** is a React-based web application for sharing ideas and helping users organize the work needed to turn an idea into reality. It combines an idea-sharing feed with structured planning tools, user profiles, and collaboration-oriented features.

> **Project context:** Developed as an undergraduate Software Engineering course project.

## Overview

Ideas often need more than a description: they need a plan, resources, milestones, and the right people. IdeaGram brings these elements together by allowing users to publish ideas and organize related information in one place.

The repository contains the **frontend application**. It communicates with a separate API service for authentication and application data; the backend source code is not included in this repository.

## Features

- **Account access** — login, account registration, and a password-recovery interface.
- **Idea discovery** — browse ideas and filter them by categories such as Arts, Games, Design & Technology, Food & Craft, Films, Music, Publishing, and Science.
- **Idea management** — create ideas through a multi-step form, add descriptions and images, attach files, and edit idea details.
- **Structured idea planning** — organize an idea with:
  - Evolution steps and target dates
  - Financial steps, costs, and priorities
  - Collaboration requests with role, skills, education, and compensation details
  - Official or organizational information
- **Community interactions** — idea comments, likes, bookmarks/saved ideas, and view-related information where supported by the API.
- **User profiles** — view and edit profile information, manage social links, and browse personal ideas.
- **Social connections** — follower and following lists.
- **Reporting interfaces** — report ideas or accounts.
- **Client-side state management** — Redux Toolkit is used to manage shared feature state.

Some features depend on the availability and behavior of the external API. This repository does not include the backend service.

## Technology Stack

| Technology | Purpose |
| --- | --- |
| React 18 | Component-based user interface |
| React Router 6 | Client-side routing |
| Redux Toolkit & React Redux | Shared application state |
| Axios | HTTP requests to the API |
| Material UI | UI components and icons |
| Sass / SCSS Modules | Component-scoped styling |
| `react-datepicker` | Date selection |
| `jwt-decode` | Reading claims from access tokens |
| Create React App (`react-scripts`) | Development server and build tooling |

## Getting Started

### Prerequisites

- Node.js and npm
- Access to a compatible IdeaGram backend API

### Installation

1. Clone the repository:

   ```bash
   git clone <YOUR_REPOSITORY_URL>
   cd <REPOSITORY_DIRECTORY>/ideagram
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

4. Open the local URL shown in the terminal (Create React App typically uses `http://localhost:3000`).

### Production build

```bash
npm run build
```

### Tests

```bash
npm test
```

The project uses the Create React App test runner. A passing test suite has not been verified as part of this documentation.

## API Configuration

The current frontend references an external API at `http://api.iwantnet.space:8001/api/` in its requests and uses a development proxy configured in `package.json`.

Before deploying or sharing a production build:

1. Confirm that the API host is available and that you have permission to use it.
2. Prefer HTTPS for API traffic.
3. Move the API base URL into environment-based configuration rather than repeating a hard-coded URL across components.
4. Never commit credentials, private tokens, or other secrets.
5. Confirm that the backend supports the endpoints and authentication flow used by the frontend.

The backend is not bundled with this repository, so installing the frontend alone may not provide a fully working application.

## Project Structure

```text
ideagram/
├── public/                 # HTML entry point and public assets
├── src/
│   ├── api/                # Authentication context and API-related logic
│   ├── components/         # Reusable UI and feature components
│   ├── pages/              # Route-level screens and page layouts
│   ├── store/              # Redux Toolkit slices and store setup
│   ├── App.js               # Application routes
│   └── index.js             # React entry point and providers
├── package.json
└── package-lock.json
```

## Learning Outcomes

As a Software Engineering course project, IdeaGram provides practical experience with:

- Breaking a user-facing application into reusable React components
- Organizing route-based pages and nested feature flows
- Managing shared state with Redux Toolkit
- Integrating a frontend with REST-style API endpoints
- Handling authentication tokens and protected API requests
- Building forms and multi-step workflows
- Styling components with SCSS modules

## Current Scope and Future Improvements

Potential next steps for the project include:

- Centralizing API calls and configuring the API base URL through environment variables
- Replacing hard-coded HTTP endpoints with HTTPS configuration
- Improving loading, error, and empty states
- Adding automated tests for core user flows
- Reviewing authentication persistence and token-expiration handling
- Improving accessibility, responsive behavior, and form validation
- Documenting and versioning the backend API contract
