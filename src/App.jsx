// src/App.jsx
import "./styles/theme.css";
import "./styles/global.css";

import { Main } from "./components/Main";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
function App() {
  return (
    <>
      <Header />;
      <Main />;
      <Footer />;
    </>
  )
}

export default App;
