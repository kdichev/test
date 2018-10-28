import React, { useState, lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@material-ui/core/CssBaseline";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

// import Menu from "./components/Menu";
import Header from "./components/Header";

const Menu = lazy(() => import("./components/Menu"));

const theme = createMuiTheme({
  palette: {
    primary: { main: "#002b45" },
    secondary: { main: "#ed8b00", contrastText: "white" },
    background: {
      default: "#eef0f1"
    }
  }
});

const App = ({ classes }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <MuiThemeProvider theme={theme}>
      <>
        <CssBaseline />
        <Header onClick={() => setToggle(true)} />
        <Suspense fallback={null}>
          <Menu open={toggle} onClose={() => setToggle(false)} />
        </Suspense>
      </>
    </MuiThemeProvider>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
