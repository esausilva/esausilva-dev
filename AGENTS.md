# Agent Instructions

Welcome! These instructions provide details about the project structure and technology stack to help AI agents navigate and contribute to this repository effectively.

## Project Overview

This is a Software Engineer Portfolio for Esau Silva. It is built as a static site using Gatsby and React.

## Technology Stack

- **Framework**: Gatsby (v5.16) / React (v19.2)
- **Styling**: `styled-components` (v6.4) (with `polished` for helper functions)
- **Typography**: `typography.js` (integrated via `gatsby-plugin-typography`)
- **Icons**: FontAwesome (v7.2) (`@fortawesome/react-fontawesome` v3.3)
- **Images**: `gatsby-plugin-image`, `gatsby-plugin-sharp`, `gatsby-transformer-sharp` (with `lazysizes` for lazy loading)
- **Animations/Interactions**: `typed.js` (v3.0) (typing animations), `react-scroll` (smooth scrolling), `react-responsive-carousel` (carousels)
- **Formatting**: Prettier (v3.8) (`prettier`, `prettier.config.js`)

## Project Structure

```text
/
├── _misc/                 # Miscellaneous files
├── public/                # Build output directory (generated)
├── src/                   # Source code
│   ├── components/        # Reusable React components
│   ├── data.js            # Main data file containing portfolio content
│   ├── images/            # Static image assets
│   ├── pages/             # Gatsby pages (e.g., index.js)
│   └── utils/             # Utility functions (e.g., typography configuration)
├── .env / .env.example    # Environment variables
├── gatsby-browser.js      # Gatsby browser APIs
├── gatsby-config.js       # Main Gatsby configuration file (plugins, site metadata)
├── gatsby-node.js         # Gatsby node APIs (build-time operations)
├── gatsby-ssr.js          # Gatsby server-side rendering APIs
├── package.json           # Dependencies and scripts
├── prettier.config.js     # Prettier configuration
└── setup.js               # Setup script
```

## Available Scripts

- `npm run develop`: Start the Gatsby development server (accessible at `http://localhost:8000`).
- `npm run build`: Build the Gatsby site for production.
- `npm run serve`: Serve the production build locally.
- `npm run format`: Format the codebase using Prettier.
- `npm start`: Clean `.cache` and `public` folders, then run the development server.

## Guidelines for Agents

1. **Styling**: When creating or modifying components, use `styled-components`. Avoid inline styles or standard CSS files unless absolutely necessary.
2. **Formatting**: Ensure all new code complies with the project's Prettier formatting rules (`npm run format`).
3. **Data Management**: Portfolio content is largely managed within `src/data.js`. If updating content like projects, experiences, or social links, look there first.
4. **Images**: Use `gatsby-plugin-image` for optimized image rendering. Avoid standard `<img>` tags where Gatsby's image components provide better performance.
