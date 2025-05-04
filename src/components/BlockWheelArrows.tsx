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
  const historicalDatesButtons = historicalDates.map(
    (historicalDate, index) => {
      return (
        <button
          className={`block-arrows__mobile-button ${
            index === choosenDate ? "mobile-button--active" : ""
          }`}
          key={historicalDate.title}
          onClick={() => {
            if (index !== choosenDate) {
              const swiper = document.querySelector(
                ".block-swiper-wrapper"
              ) as HTMLElement;
              swiper.style.opacity = "0";
            }
            setTimeout(() => {
              setChoosenDate(index);
              setPreviousDate(choosenDate);
            }, 300);
          }}
        ></button>
      );
    }
  );

  return (
    <article className="block-arrows">
      <div className="block-arrows__container">
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
              const swiper = document.querySelector(
                ".block-swiper-wrapper"
              ) as HTMLElement;
              swiper.style.opacity = "0";
              setTimeout(() => {
                setChoosenDate(choosenDate - 1);
                setPreviousDate(choosenDate);
              }, 300);
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
              const swiper = document.querySelector(
                ".block-swiper-wrapper"
              ) as HTMLElement;
              swiper.style.opacity = "0";
              setTimeout(() => {
                setChoosenDate(choosenDate + 1);
                setPreviousDate(choosenDate);
              }, 300);
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
      </div>
      <div className="block-arrows__mobile-buttons">
        {historicalDatesButtons}
      </div>
    </article>
  );
}
