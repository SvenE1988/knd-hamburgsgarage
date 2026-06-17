import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypeScript from "eslint-config-next/typescript";

// Flat-Config für Next.js 16 (ESLint 9). Nutzt die nativen Flat-Config-Exports
// von eslint-config-next – kein FlatCompat nötig. Ersetzt den mit Next 16
// entfernten eslint-Key in next.config. Lint-Lauf: `npm run lint`.
const eslintConfig = [
  { ignores: [".next/**", "node_modules/**", "next-env.d.ts"] },
  ...nextCoreWebVitals,
  ...nextTypeScript,
  {
    rules: {
      // SSR-sichere Client-Initialisierung: localStorage/sessionStorage sind erst
      // clientseitig lesbar, daher ist setState im Effect hier gewollt → Hinweis statt Fehler.
      "react-hooks/set-state-in-effect": "warn",
    },
  },
];

export default eslintConfig;
