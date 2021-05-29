import dayjs from "dayjs";
import { NextApiRequest, NextApiResponse } from "next";
import { TimelineViewItem } from "../timeline/types";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  // TODO: Move the data into a json file
  const result: TimelineViewItem[] = [
    {
      title: "Sputnik 1 Launches",
      date: "1957-10-04T19:28:00.000Z",
      imagePath: "/sputnik-1.jpg",
      description:
        "Earth's first artificial satellite, Sputnik 1, is launched into orbit by the USSR",
    },
    {
      title: "Yuri Gagarin Goes to Space",
      date: "1961-04-12",
      imagePath:
        "https://cdn.mos.cms.futurecdn.net/5fYBxKMEPptzrGBrRSvUJm-1200-80.jpg",
      description:
        "Yuri Gagarin becomes the first human to travel to space.",
    },
  ];
  res.status(200).json(result);
};
