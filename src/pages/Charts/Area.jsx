import React from "react";

import { Header } from "../../components";
import { AreaChart } from "../../components";

const Area = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white dark:bg-black/20 rounded-3xl">
      <Header category="Charts" title="Area Chart" />
      <AreaChart />
    </div>
  );
};

export default Area;
