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

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: theme.spacing(6),
    padding: theme.spacing(3, 2)
  },
  formSpacing: {
    marginBottom: theme.spacing(3)
  },
  getStartedButton: {
    color: "#fff",
    textDecoration: "none",
    padding: theme.spacing(1),
    width: "100%",
    marginBottom: theme.spacing(1),
    display: "block",
    textAlign: "center",
    background:
      "linear-gradient(90deg, rgba(251,110,63,1) 0%, rgba(252,70,226,1) 100%)",
    borderRadius: theme.spacing(1),
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
       Start Swiping
      </Button>
    </Paper>
  );
}

export default SignUpForm;
