import { useEffect, useState } from "react";
import { HistoricalDate } from "../historicalDates";
import "./BlockBigYears.scss";

interface BlockBigYearsProps {
  historicalDates: HistoricalDate[];
  choosenDate: number;
  previousDate: number;
}

export default function BlockBigYears({
  historicalDates,
  choosenDate,
  previousDate,
}: BlockBigYearsProps) {
  useEffect(() => {
    const differenceFrom =
      historicalDates[previousDate].from - historicalDates[choosenDate].from;
    if (differenceFrom > 0) {
      for (let i = 0; i < differenceFrom; i++) {
        setTimeout(() => {
          const fromYear = document.getElementById("year-from") as HTMLElement;
          fromYear.innerHTML = `${historicalDates[previousDate].from - i - 1}`;
        }, 50 * i);
      }
    }
    if (differenceFrom < 0) {
      for (let i = -differenceFrom; i > 0; i--) {
        setTimeout(() => {
          const fromYear = document.getElementById("year-from") as HTMLElement;
          fromYear.innerHTML = `${historicalDates[previousDate].from + i}`;
        }, 50 * i);
      }
    }

    const differenceTo =
      historicalDates[previousDate].to - historicalDates[choosenDate].to;

    if (differenceTo > 0) {
      for (let i = 0; i < differenceTo; i++) {
        setTimeout(() => {
          const toYear = document.getElementById("year-to") as HTMLElement;
          toYear.innerHTML = `${historicalDates[previousDate].to - i - 1}`;
        }, 50 * i);
      }
    }
    if (differenceTo < 0) {
      for (let i = -differenceTo; i > 0; i--) {
        setTimeout(() => {
          const toYear = document.getElementById("year-to") as HTMLElement;
          toYear.innerHTML = `${historicalDates[previousDate].to + i}`;
        }, 50 * i);
      }
    }
  });
  return (
    <article className="big-years">
      <h1 id="year-from">{historicalDates[choosenDate].from}</h1>
      <h1 id="year-to">{historicalDates[choosenDate].to}</h1>
    </article>
  );
}
