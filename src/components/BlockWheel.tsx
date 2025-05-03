import { Dispatch, SetStateAction } from "react";
import { HistoricalDate } from "../historicalDates";
import "./BlockWheel.scss";

interface BlockWheelProps {
  historicalDates: HistoricalDate[];
  choosenDate: number;
  setChoosenDate: Dispatch<SetStateAction<number>>;
  setPreviousDate: Dispatch<SetStateAction<number>>;
}

export default function BlockWheel({
  historicalDates,
  choosenDate,
  setChoosenDate,
  setPreviousDate,
}: BlockWheelProps) {
  const buttonsQuantity: number = historicalDates.length;
  const wheelRotation: number = (360 / buttonsQuantity) * choosenDate;

  const wheelButtons = historicalDates.map(
    (historicalDate: HistoricalDate, index) => {
      return (
        <div
          className="wheel__button-wrapper"
          style={{
            transform: `rotate(${
              (360 / buttonsQuantity) * index + 360 / buttonsQuantity / 2
            }deg)`,
          }}
          key={historicalDate.title}
        >
          <button
            className={`wheel__button ${
              index === choosenDate ? "wheel__button-active" : ""
            }`}
            style={{
              transform: `rotate(${
                -((360 / buttonsQuantity) * index + 360 / buttonsQuantity / 2) +
                wheelRotation
              }deg)`,
            }}
            onClick={() => {
              setChoosenDate(index);
              setPreviousDate(choosenDate);
            }}
          >
            {index + 1}
            <span>{historicalDate.title}</span>
          </button>
        </div>
      );
    }
  );

  return (
    <div
      className="wheel"
      style={{
        transform: `rotate(-${wheelRotation}deg)`,
      }}
    >
      {wheelButtons}
    </div>
  );
}
