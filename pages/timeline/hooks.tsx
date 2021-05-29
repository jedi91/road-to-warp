import { useEffect, useState } from "react";
import { TimelineViewItem } from "./types";

const useTimeline = () => {
  const [timeline, setTimeline] = useState<TimelineViewItem[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/getTimeline").then(
      async (data) => {
        const result: TimelineViewItem[] = await data.json();
        setTimeline(result);
      },
    );
  }, []);

  return timeline;
};

export { useTimeline };
