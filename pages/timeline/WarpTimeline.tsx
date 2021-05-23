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
import dayjs from "dayjs";
import { FC } from "react";
import useStyles from "./styles";
import { WarpTimelineItem } from "./types";

interface WarpTimelineProps {
  items?: WarpTimelineItem[];
}

const WarpTimeline: FC<WarpTimelineProps> = ({ items = [] }) => {
  const theme = useTheme();
  const styles = useStyles();
  return (
    <Timeline>
      {items.map((item, index) =>
        index % 2 === 0 ? (
          <TimelineItem>
            <TimelineOppositeContent className={styles.timelineDate}>
              <Typography variant="body2" color="textSecondary">
                {dayjs(item.date).format("MMM D YYYY")}
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Card
                className={styles.timelineCard}
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
        ) : (
          <TimelineItem>
            <TimelineOppositeContent
              style={{
                display: "flex",
                justifyContent: "flex-end",
                flexDirection: "row",
              }}
            >
              <Card
                className={styles.timelineCard}
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
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent className={styles.timelineDateAlt}>
              <Typography variant="body2" color="textSecondary">
                {dayjs(item.date).format("MMM D YYYY")}
              </Typography>
            </TimelineContent>
          </TimelineItem>
        ),
      )}
    </Timeline>
  );
};

export default WarpTimeline;
