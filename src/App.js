import React from "react";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/";
import Home from "./pages/Home";
import Swipe from "./pages/Swipe";
import Messages from "./pages/Messages";
import Profile from "./pages/Profile";
import SendMessage from "./pages/SendMessage";
import { Adams } from "./data/adams";
import { pink } from "@material-ui/core/colors";
import GA from 'utils/GoogleAnalytics'
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

function App() {
  return (
    <Router history={history}>
      { GA.init() && <GA.RouteTracker /> }
      <ThemeProvider theme={theme}>
        <Switch>
          <Route exact path="/" children={<Home />} />
          <Route exact path="/swipe" render={(props) => <Swipe {...props} currentPage={"swipe"} />} />
          <Route exact path="/messages" render={(props) => <Messages {...props} currentPage={"messages"} />} />
          <Route exact path="/profile" render={(props) => <Profile {...props} currentPage={"profile"} />} />
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
