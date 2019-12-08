import React from "react";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/";
import Home from "./pages/Home";
import Swipe from "./pages/Swipe";
import Messages from "./pages/Messages";
import SendMessage from "./pages/SendMessage";
import { pink } from "@material-ui/core/colors";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const theme = createMuiTheme({
  palette: {
    primary: { main: pink[500] }
  }
});

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/swipe">
            <Swipe />
          </Route>
          <Route path="/messages">
            <Messages />
          </Route>
          <Route path="/send-message">
            <SendMessage />
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;
