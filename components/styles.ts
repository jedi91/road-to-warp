import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  header: {
    width: "95%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  appBar: {
    backgroundColor: "grey",
  },
  drawer: {
    width: "100%",
  },
  drawerButton: {
    justifyContent: "flex-start",
    padding: 20,
  },
});

export default useStyles;
