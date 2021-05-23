import { useEffect, useState } from "react";
import { WarpTimelineItem } from "./types";

const useTimeline = () => {
  const [timeline, setTimeline] = useState<WarpTimelineItem[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/getTimeline").then(
      async (data) => {
        const result: WarpTimelineItem[] = await data.json();
        setTimeline(result);
      },
    );
  }, []);

  return timeline;
};

export { useTimeline };
