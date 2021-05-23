import {
  Typography,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
} from "@material-ui/core";
import useStyles from "./styles";
import GitHubIcon from "@material-ui/icons/GitHub";
import { useTheme } from "@material-ui/core";
import { Header } from "../../components";

const HomePage = () => {
  const styles = useStyles();
  const theme = useTheme();

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <Card
          className={styles.card}
          style={{
            backgroundColor: theme.palette.grey[400],
          }}
        >
          <CardHeader
            className={styles.cardTitle}
            title="Road to Warp"
            subheader=""
          />
          <CardMedia
            className={styles.cardMedia}
            image="/Alcubierre.png"
            title="Alcubierre drive"
          />
          <CardContent>
            <Typography className={styles.title} component="h6">
              A place to learn, research, and dream about space and
              our journey to faster than light travel.
            </Typography>
          </CardContent>
        </Card>
      </main>

      <footer className={styles.footer}>
        <a href="https://github.com/jedi91/road-to-warp">
          <GitHubIcon />
        </a>
      </footer>
    </div>
  );
};

export default HomePage;
