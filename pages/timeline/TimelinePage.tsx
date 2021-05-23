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
import WarpTimeline from "./WarpTimeline";
import dayjs from "dayjs";

const TimelinePage = () => {
  const theme = useTheme();
  const styles = useStyles();
  console.log(dayjs().toISOString());
  return (
    <>
      <Header title="Timeline" />
      <div className={styles.wrapper}>
        <Card
          className={styles.card}
          style={{
            backgroundColor: theme.palette.grey[400],
          }}
        >
          <CardHeader className={styles.cardTitle} title="Timeline" />
          <CardMedia
            className={styles.cardMedia}
            image="/milky-way.jpg"
            title="Milky Way"
          />
          <CardContent>
            <Typography className={styles.title} component="h6">
              An interactive timeline of how we got here and where we
              are going.
            </Typography>
          </CardContent>
        </Card>
      </div>
      <div>
        <WarpTimeline
          items={[
            {
              title: "Sputnik 1 Launches",
              date: dayjs("1957-10-04T19:28:00.000Z"),
              imagePath: "/sputnik-1.jpg",
              description:
                "Earth's first artificial satellite, Sputnik 1, is launched into orbit by the USSR",
            },
          ]}
        />
      </div>
      <footer className={styles.footer}>
        <a href="https://github.com/jedi91/road-to-warp">
          <GitHubIcon />
        </a>
      </footer>
    </>
  );
};

export default TimelinePage;
