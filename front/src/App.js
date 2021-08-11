import React from "react";
import { Box, Container } from "@material-ui/core";
import Chronometer from "./components/Chronometer";
import TimeRecords from "./components/TimeRecords";
//import { makeStyles } from "@material-ui/core/styles";

/*const useStyles = makeStyles({

});*/

function App() {
    //const classes = useStyles();
    const title = 'TIME';
    return (
      <Container maxWidth="xl">
        <Box
          fontSize="h1.fontSize"
          fontFamily="fontFamily"
          textAlign="center"
          fontWeight="fontWeightBold"
        >
          {title}
        </Box>
        <Chronometer />
        <TimeRecords />
      </Container>
    );
}

export default App;