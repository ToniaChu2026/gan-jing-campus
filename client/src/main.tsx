import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// The site makes no tRPC / React Query calls (the old Manus template's providers
// were removed to keep them out of every page's JavaScript). The form posts to
// /api/submit with fetch.
const app = <App />;

// Built pages ship prerendered HTML (scripts/prerender.mjs): hydrate it so the
// content stays visible while the page's code chunk loads. The dev server and
// 404.html have an empty root, so render from scratch there.
const container = document.getElementById("root")!;
if (container.hasChildNodes()) {
  hydrateRoot(container, app);
} else {
  createRoot(container).render(app);
}
