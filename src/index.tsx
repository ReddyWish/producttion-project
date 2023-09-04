import {render} from "react-dom";
import ThemeProvider from "./theme/ThemeProvider";
import App from "./App";
import {BrowserRouter} from "react-router-dom";

render(
  <BrowserRouter>
    <ThemeProvider>
      <App/>
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById("root")
)