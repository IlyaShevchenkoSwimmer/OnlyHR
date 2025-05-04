import { Dispatch, SetStateAction } from "react";
import { HistoricalDate } from "../historicalDates";
import BlockWheel from "./BlockWheel";
import "./BlockYearsWheel.scss";
import BlockBigYears from "./BlockBigYears";

interface BlockYearsWheelProps {
  historicalDates: HistoricalDate[];
  choosenDate: number;
  setChoosenDate: Dispatch<SetStateAction<number>>;
  previousDate: number;
  setPreviousDate: Dispatch<SetStateAction<number>>;
}

export default function BlockYearsWheel({
  historicalDates,
  choosenDate,
  setChoosenDate,
  previousDate,
  setPreviousDate,
}: BlockYearsWheelProps) {
  return (
    <section className="years-wheel">
      <BlockBigYears
        historicalDates={historicalDates}
        choosenDate={choosenDate}
        previousDate={previousDate}
      />
      <BlockWheel
        historicalDates={historicalDates}
        choosenDate={choosenDate}
        setChoosenDate={setChoosenDate}
        setPreviousDate={setPreviousDate}
      />
    </section>
  );
}
