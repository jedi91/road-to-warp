import {
  Typography,
  useTheme,
  Card,
  CardHeader,
  CardContent,
  CardMedia,
} from "@material-ui/core";
import {
  Timeline,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
  TimelineConnector,
  TimelineDot,
  TimelineContent,
} from "@material-ui/lab";
import { Dayjs } from "dayjs";
import { FC } from "react";
import useStyles from "./styles";

interface WarpTimelineItem {
  date: Dayjs;
  title: string;
  imagePath: string;
  description: string;
}

interface WarpTimelineProps {
  items?: WarpTimelineItem[];
}

const WarpTimeline: FC<WarpTimelineProps> = ({ items = [] }) => {
  const theme = useTheme();
  const styles = useStyles();
  return (
    <Timeline>
      {items.map((item) => (
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography variant="body2" color="textSecondary">
              {item.date.format("MMM D YYYY")}
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Card
              className={styles.card}
              style={{
                backgroundColor: theme.palette.grey[400],
              }}
            >
              <CardHeader
                className={styles.cardTitle}
                title={item.title}
              />
              <CardMedia
                className={styles.timelineMedia}
                image={item.imagePath}
                title={item.title}
              />
              <CardContent>
                <Typography className={styles.title} component="h6">
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};

export default WarpTimeline;
