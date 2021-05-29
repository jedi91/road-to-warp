import { Typography } from "@material-ui/core";
import useStyles from "./styles";
import { Header } from "../../components";
import GitHubIcon from "@material-ui/icons/GitHub";
import TimelineView from "./TimelineView";
import dayjs from "dayjs";
import { useTimeline } from "./hooks";
import TimelineSearch, { OrderDirection } from "./TimelineSearch";
import { useEffect, useState } from "react";
import { getDecade, getDecades, sortByDate } from "./utils";

const TimelinePage = () => {
  const timeline = useTimeline();
  const [filteredTimeline, setFilteredTimeline] = useState(timeline);
  const [searchValue, setSearchValue] = useState<string>("");
  const [orderDirection, setOrderDirection] =
    useState<OrderDirection>("ascending");
  const [selectedDecades, setSelectedDecades] = useState<string[]>(
    [],
  );

  useEffect(() => {
    setFilteredTimeline(timeline);
  }, [timeline]);

  const filterTimeline = (text: string, decades: string[]) =>
    timeline
      .filter(
        (x) =>
          decades.length === 0 ||
          decades.includes(getDecade(dayjs(x.date))),
      )
      .filter((x) =>
        JSON.stringify(x)
          .toLocaleLowerCase()
          .includes(text.toLocaleLowerCase()),
      );

  const handleSearchChange = (text: string) => {
    setSearchValue(text);
    setFilteredTimeline(filterTimeline(text, selectedDecades));
  };

  const handleDecadeSelected = (decade: string) => {
    let updatedDecades: string[] = [];
    if (selectedDecades.includes(decade)) {
      updatedDecades = [
        ...selectedDecades.filter((x) => x !== decade),
      ];
    } else {
      updatedDecades = [...selectedDecades, decade];
    }

    setSelectedDecades(updatedDecades);
    setFilteredTimeline(filterTimeline(searchValue, updatedDecades));
  };

  const styles = useStyles();

  return (
    <div className={styles.main}>
      <Header title="Timeline" />
      <div className={styles.scrollArea}>
        <div className={styles.cardWrapper}>
          <Typography variant="h4">Our Journey So Far</Typography>
        </div>
        <TimelineSearch
          decades={getDecades(timeline.map((x) => dayjs(x.date)))}
          selectedDecades={selectedDecades}
          direction={orderDirection}
          onSearchChange={handleSearchChange}
          onDecadeSelected={handleDecadeSelected}
          onDirectionChange={setOrderDirection}
        />
        <TimelineView
          items={filteredTimeline.sort((a, b) =>
            sortByDate(dayjs(a.date), dayjs(b.date), orderDirection),
          )}
        />
        <footer className={styles.footer}>
          <a href="https://github.com/jedi91/road-to-warp">
            <GitHubIcon />
          </a>
        </footer>
      </div>
    </div>
  );
};

export default TimelinePage;
