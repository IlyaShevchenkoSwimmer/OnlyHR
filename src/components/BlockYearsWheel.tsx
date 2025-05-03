import { Dispatch, SetStateAction } from "react";
import { HistoricalDate } from "../historicalDates";
import BlockWheel from "./BlockWheel";
import "./BlockYearsWheel.scss";

interface BlockYearsWheelProps {
  historicalDates: HistoricalDate[];
  choosenDate: number;
  setChoosenDate: Dispatch<SetStateAction<number>>;
  setPreviousDate: Dispatch<SetStateAction<number>>;
}

export default function BlockYearsWheel({
  historicalDates,
  choosenDate,
  setChoosenDate,
  setPreviousDate,
}: BlockYearsWheelProps) {
  return (
    <section className="years-wheel">
      <BlockWheel
        historicalDates={historicalDates}
        choosenDate={choosenDate}
        setChoosenDate={setChoosenDate}
        setPreviousDate={setPreviousDate}
      />
    </section>
  );
}
