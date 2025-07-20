import { ReactLenis } from "lenis/react";
import { BrowserRouter } from "react-router";
import Router from "./pages/router";

export default function App() {
  return (
    <>
      <ReactLenis root />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  );
}
