import { Dispatch, SetStateAction } from "react";
import { HistoricalDate } from "../historicalDates";
import "./BlockWheelArrows.scss";

interface BlockWheelArrowsProps {
  historicalDates: HistoricalDate[];
  choosenDate: number;
  setChoosenDate: Dispatch<SetStateAction<number>>;
  setPreviousDate: Dispatch<SetStateAction<number>>;
}

export default function BlockWheelArrows({
  historicalDates,
  choosenDate,
  setChoosenDate,
  setPreviousDate,
}: BlockWheelArrowsProps) {
  return (
    <article className="block-arrows">
      <div className="block-arrows__current-date">{`${(
        choosenDate + 1
      ).toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      })}/${historicalDates.length.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      })}`}</div>
      <div className="block-arrows__arrows">
        <button
          className={`block-arrows__arrows--button ${
            choosenDate === 0 ? "block-arrows__arrows--button--disabled" : ""
          }`}
          onClick={() => {
            setChoosenDate(choosenDate - 1);
            setPreviousDate(choosenDate);
          }}
          disabled={choosenDate === 0 ? true : false}
        >
          <img src="./arrow.png" alt="left" />
        </button>
        <button
          className={`block-arrows__arrows--button ${
            choosenDate === historicalDates.length - 1
              ? "block-arrows__arrows--button--disabled"
              : ""
          }`}
          onClick={() => {
            setChoosenDate(choosenDate + 1);
            setPreviousDate(choosenDate);
          }}
          disabled={choosenDate === historicalDates.length - 1 ? true : false}
        >
          <img
            src="./arrow.png"
            alt="right"
            style={{ transform: "rotate(180deg)" }}
          />
        </button>
      </div>
    </article>
  );
}
