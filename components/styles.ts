import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  header: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  appBar: {
    backgroundColor: "grey",
  },
  barTitle: {
    margin: "1%",
    marginLeft: "2%",
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
