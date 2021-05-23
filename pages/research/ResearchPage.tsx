import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
  useTheme,
} from "@material-ui/core";
import React from "react";
import { Header } from "../../components";
import useStyles from "./styles";
import GitHubIcon from "@material-ui/icons/GitHub";

const ResearchPage = () => {
  const theme = useTheme();
  const styles = useStyles();
  return (
    <>
      <Header title="Research Center" />
      <div className={styles.wrapper}>
        <Card
          className={styles.card}
          style={{
            backgroundColor: theme.palette.grey[400],
          }}
        >
          <CardHeader
            className={styles.cardTitle}
            title="Research Center"
          />
          <CardMedia
            className={styles.cardMedia}
            image="/radio-telescope.jpg"
            title="radio telescope"
          />
          <CardContent>
            <Typography className={styles.title} component="h6">
              The future home of a curated search engine to help
              filter out the noise and get you to the information you
              need most. Search for results across a variety of
              reliable scientific sources and filter results to focus
              on different types of content such as news articles,
              blog posts, videos, or scientific papers.
            </Typography>
          </CardContent>
        </Card>
      </div>
      <footer className={styles.footer}>
        <a href="https://github.com/jedi91/road-to-warp">
          <GitHubIcon />
        </a>
      </footer>
    </>
  );
};

export default ResearchPage;
