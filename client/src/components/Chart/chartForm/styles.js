// import { green } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(3),
    },
    ".MuiInputLabel-formControl": {
      position: "relative", // or black
    },
  },
  paper: {
    // padding: theme.spacing(2),
    background: "#d2d3f7",
    margin: "0px",
  },
  menuTitle: {
    margin: "auto",
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    marginLeft: "5px",
  },
  formControl: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  buttonSubmit: {
    margin: "10px 20px 5px",
    width: "75%",
  },
  inputLabel: {
    margin: "5px 20px 5px",
    width: "75%",
    position: "relative",
  },
  dropdownMenu: {
    width: "75%",
    margin: "5px 20px 5px",
  },
}));
