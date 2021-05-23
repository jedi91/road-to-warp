import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  wrapper: {
    width: "100%",
    alignContent: "center",
    justifyContent: "center",
    display: "flex",
    padding: "2%",
  },
  title: {
    textAlign: "center",
    verticalAlign: "center",
    margin: "5%",
    marginTop: 0,
  },
  appBar: {
    backgroundColor: "grey",
  },
  card: {
    padding: "1%",
    paddingBottom: 0,
    alignContent: "center",
    justifyContent: "center",
    width: "50%",
    //height: "500px",
  },
  timelineCard: {
    padding: "1%",
    paddingBottom: 0,
    alignContent: "center",
    justifyContent: "center",
    width: "50%",
    //height: "500px",
  },
  timelineCardAlt: {
    padding: "1%",
    paddingBottom: 0,
    alignContent: "center",
    justifyContent: "center",
    width: "50%",
    //height: "500px",
  },
  timelineDate: {
    textAlign: "right",
  },
  timelineDateAlt: {
    textAlign: "left",
  },
  cardTitle: {
    textAlign: "center",
  },
  cardMedia: {
    height: 0,
    paddingTop: "25%", //"56.25%",
    margin: "5%",
  },
  timelineMedia: {
    height: 0,
    paddingTop: "56.25%",
    margin: "5%",
  },
  footer: {
    width: "100%",
    height: "75px",
    borderTop: "1px solid #eaeaea",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default useStyles;
