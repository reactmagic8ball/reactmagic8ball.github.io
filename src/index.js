import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
import Answer from "./Answer";
import {Helmet} from "react-helmet";
const rootElement = document.getElementById("example");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="answer" element={<Answer />} title="a"/>
    </Routes>
  </BrowserRouter>,
  rootElement
);