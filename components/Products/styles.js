import { makeStyles } from "@material-ui/core/styles";
// import shapes from "../../images/shapes";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    // backgroundImage: `src(shapes)`,
    backgroundColor: "#128C7E",
    padding: theme.spacing(1),
  },
  root: {
    flexGrow: 1,
  },
}));
