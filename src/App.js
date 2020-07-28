import React from "react";
import Nav from "./Nav";
import Grid from "./Grid"
import CssBaseline from "@material-ui/core/CssBaseline";


const App = () => {
  return (
    <React.Fragment>
        <CssBaseline/>
        <Nav/>
        <Grid/>
    </React.Fragment>
  );
};

export default App;
