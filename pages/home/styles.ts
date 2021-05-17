import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    minHeight: "100vh",
    padding: "0 0.5rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    width: "100%",
  },
  main: {
    padding: "5rem 0",
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    width: "100%",
    height: "100px",
    borderTop: "1px solid #eaeaea",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    verticalAlign: "center",
  },
  bottomNav: {
    padding: "15px",
    backgroundColor: "#B8B8B8",
    position: "absolute",
    bottom: "20%",
  },
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
