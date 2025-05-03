import { HistoricalDate } from "../historicalDates";
import "./BlockBigYears.scss";

interface BlockBigYearsProps {
  historicalDates: HistoricalDate[];
  choosenDate: number;
}

export default function BlockBigYears({
  historicalDates,
  choosenDate,
}: BlockBigYearsProps) {
  return (
    <article className="big-years">
      <h1>{historicalDates[choosenDate].from}</h1>
      <h1>{historicalDates[choosenDate].to}</h1>
    </article>
  );
}
