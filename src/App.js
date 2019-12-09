import React from "react";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/";
import Home from "./pages/Home";
import Swipe from "./pages/Swipe";
import Messages from "./pages/Messages";
import SendMessage from "./pages/SendMessage";
import { Adams } from "./data/adams";
import { pink } from "@material-ui/core/colors";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

const theme = createMuiTheme({
  palette: {
    primary: { main: pink[500] }
  }
});

// TODO: Do I map through Adams object to generate routes here? Instead of using the children? :O
function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Switch>
          <Route exact path="/" children={<Home />} />
          {/* <Route exact path="/swipe" children={<Swipe />} /> */}
          <Route exact path="/swipe" render={(props) => <Swipe {...props} currentPage={"swipe"} />} />
          <Route exact path="/messages" render={(props) => <Messages {...props} currentPage={"messages"} />} />
          <Route exact path="/send-message" children={<SendMessage />} />
          {Adams.map((obj, index) => {
            return (
                <Route
                  path={`/messages/${obj.occupation
                    .replace(/\s+/g, "-")
                    .toLowerCase()}`}
                  render={(props) => <SendMessage {...props} imageSrc={obj.imageSrc} imageAlt={obj.imageAlt} occupation={obj.occupation} />}
                    key={index}
                />
            );
          })}
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;
