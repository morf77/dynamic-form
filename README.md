## Message

- Enjoy from cashing every action of user ^\_^ (check by reloading page after every action)

## Features

- Dynamic insurance forms with validation
- Multi-language support (English & Farsi)
- Responsive UI with Tailwind CSS
- Redux Toolkit for state management
- API integration with RTK Query & Axios
- Locale-based routing (`/:locale/*`)
- Dark/light theme toggle
- Integrated design pattern base on project needs
- Inheritance from stable UI elements and isolation in the factory and libs sections
- Namespace base typography
- Sprites icon system
- Use form integration with projects

---

## Getting Started

### 1. **Clone the repository**

```sh
git clone <your-repo-url>
cd insurance
```

### 2. **Install dependencies**

```sh
npm install
# or
yarn install
```

### 3. **Run the development server**

```sh
npm run dev
# or
yarn dev
```

The app will be available at [http://localhost:3000](http://localhost:3000).

---

## Project Structure

```
src/
  components/
    =>/ui          # Reusable UI components
    =>factory      # extending logics
    =>types        # declaring global name space for components
  routes/          # App routes and layouts (next js like app)
  services/        # API logic (RTK Query, Axios)
  providers/       # Context and global providers
  enums/           # Enums and constants
  helpers/         # Utility functions
  i18n.ts          # i18n configuration
public/
  locales/         # Translation files (en, fa)
```

---

## Localization

- Translation files are in `public/locales/en/translation.json` and
  `public/locales/fa/translation.json`.
- The app detects the locale from the URL (e.g., `/en`, `/fa`).
- To add more languages, add a new folder in `public/locales/` and update your i18n config if
  needed.

---

## Scripts

- `npm run dev` / `yarn dev` — Start the development server
- `npm run build` / `yarn build` — Build for production
- `npm run test` / `yarn test` — Run tests
- `npm run format` — Format code with Prettier

---

## Notes

- Make sure your API server is running if the app depends on backend endpoints.
- If you add new translation files in `public/locales`, restart the dev server.

---

## License

MIT
