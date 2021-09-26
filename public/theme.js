import {
  ThemeProvider,
  createTheme,
  makeStyles,
} from "@material-ui/core/styles";

const theme = createTheme({
  shape: {
    borderRadius: 12,
  },
  typography: {
    h5: {
      fontSize: "14px",
    },
  },
});

const useStyles = makeStyles((theme) => {});

export default theme;
