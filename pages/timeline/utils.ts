import { Dayjs } from "dayjs";
import { OrderDirection } from "./TimelineSearch";

export const getDecadeText = (date: Dayjs) =>
  date.format("YYYY").substring(0, 3).concat("0s");

export const getDecade = (date: Dayjs) =>
  date.format("YYYY").slice(0, -1).concat("0s");

export const getDecades = (dates: Dayjs[]) => {
  const duplicatesArray = dates.map(getDecade);

  const decades: string[] = [];
  duplicatesArray.forEach((decade) => {
    if (decades.includes(decade)) {
      return;
    }

    decades.push(decade);
  });

  return decades;
};

export const sortByDate = (
  a: Dayjs,
  b: Dayjs,
  direction: OrderDirection,
) => {
  const adjustment = direction === "ascending" ? 1 : -1;
  if (a.isBefore(b)) {
    return -1 * adjustment;
  }

  if (a.isAfter(b)) {
    return 1 * adjustment;
  }

  return 0;
};
