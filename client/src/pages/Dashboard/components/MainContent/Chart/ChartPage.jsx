import { useState } from "react";
import ChartHeader from "./ChartHeader";
import Chart from "./Chart";

function ChartPage() {
  const [active, setActive] = useState("6");

  return (
    <section className="w-full space-y-4 tablet-portrait:space-y-6">
      <ChartHeader active={active} setActive={setActive} />
      <div className="w-full overflow-x-auto">
        <Chart active={active} />
      </div>
    </section>
  );
}

export default ChartPage;
