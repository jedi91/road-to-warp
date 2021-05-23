import {
  useTheme,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
} from "@material-ui/core";
import useStyles from "./styles";
import { Header } from "../../components";
import GitHubIcon from "@material-ui/icons/GitHub";

const LearningPage = () => {
  const theme = useTheme();
  const styles = useStyles();
  return (
    <>
      <Header title="Learning Portal" />
      <div className={styles.wrapper}>
        <Card
          className={styles.card}
          style={{
            backgroundColor: theme.palette.grey[400],
          }}
        >
          <CardHeader
            className={styles.cardTitle}
            title="Learning Portal"
          />
          <CardMedia
            className={styles.cardMedia}
            image="/space-walk.jpg"
            title="space walk"
          />
          <CardContent>
            <Typography className={styles.title} component="h6">
              This portal will be a place to brush up on your space,
              science, and engineering knowledge. Fill in the
              knowledge gaps or learn something completely new.
              Information will range from beginner topics to more
              advanced ones.
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

export default LearningPage;
