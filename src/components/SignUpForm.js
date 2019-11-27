import React from "react";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  RadioGroup,
  Select,
  makeStyles,
  TextField
} from "@material-ui/core/";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: theme.spacing(6),
    padding: theme.spacing(3, 2)
  },
  formSpacing: {
    marginBottom: theme.spacing(3)
  },
  getStartedButton: {
    marginBottom: theme.spacing(1)
  }
}));

function SignUpForm() {
  const classes = useStyles();

  return (
    <Paper elevation={3} className={classes.container}>
      <TextField
        id="standard-basic"
        label="My name is"
        className={classes.formSpacing}
        fullWidth
      />
      <RadioGroup
        aria-label="gender"
        name="gender"
        className={classes.formSpacing}
      >
        I am a:
        <FormControl>
          <InputLabel id="demo-simple-select-label">Gender</InputLabel>
          <Select labelId="demo-simple-select-label">
            <MenuItem value={"woman"}>Woman</MenuItem>
            <MenuItem value={"man"}>Man</MenuItem>
            <MenuItem value={"other"}>Other</MenuItem>
          </Select>
        </FormControl>
      </RadioGroup>
      <RadioGroup
        aria-label="gender"
        name="gender"
        className={classes.formSpacing}
      >
        {/*
            In search of:
            <FormControlLabel
              value="male"
              control={<Radio checked={true} />}
              label="Adam Ginther"
            /> */}
        <FormControl>
          <InputLabel id="demo-simple-select-label">In Search of</InputLabel>
          <Select labelId="demo-simple-select-label">
            <MenuItem value={"adam-ginther"}>Adam Ginther</MenuItem>
            <MenuItem value={"sad-life"}>A Sad Life</MenuItem>
          </Select>
        </FormControl>
      </RadioGroup>
      <Button
        fullWidth
        variant={"contained"}
        color={"primary"}
        className={classes.getStartedButton}
      >
        <Link to={"/swipe"}>Start Swiping</Link>
      </Button>
    </Paper>
  );
}

export default SignUpForm;
