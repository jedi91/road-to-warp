import { Dayjs } from "dayjs";

export const getDecadeText = (date: Dayjs) =>
  date.format("YYYY").substring(0, 3).concat("0s");
