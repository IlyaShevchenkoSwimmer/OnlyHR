import "./Block.scss";

import BlockHeader from "./BlockHeader";
import BlockYearsWheel from "./BlockYearsWheel";

import { historicalDates } from "../historicalDates";
import { useState } from "react";

export default function Block() {
  const [choosenDate, setChoosenDate] = useState<number>(0);

  return (
    <section className="block">
      <BlockHeader />
      <BlockYearsWheel
        historicalDates={historicalDates}
        choosenDate={choosenDate}
        setChoosenDate={setChoosenDate}
      />
    </section>
  );
}
