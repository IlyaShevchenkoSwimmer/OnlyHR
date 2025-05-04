import "./Block.scss";

import BlockHeader from "./BlockHeader";
import BlockYearsWheel from "./BlockYearsWheel";

import { historicalDates } from "../historicalDates";
import { useState } from "react";
import BlockWheelArrows from "./BlockWheelArrows";
import BlockBigYears from "./BlockBigYears";
import BlockSwiper from "./BlockSwiper";

export default function Block() {
  const [choosenDate, setChoosenDate] = useState<number>(0);
  const [previousDate, setPreviousDate] = useState<number>(0);

  return (
    <section className="block">
      <BlockHeader />
      <BlockYearsWheel
        historicalDates={historicalDates}
        choosenDate={choosenDate}
        setChoosenDate={setChoosenDate}
        previousDate={previousDate}
        setPreviousDate={setPreviousDate}
      />
      <BlockWheelArrows
        historicalDates={historicalDates}
        choosenDate={choosenDate}
        setChoosenDate={setChoosenDate}
        setPreviousDate={setPreviousDate}
      />
      <BlockSwiper
        historicalDates={historicalDates}
        choosenDate={choosenDate}
      />
    </section>
  );
}
