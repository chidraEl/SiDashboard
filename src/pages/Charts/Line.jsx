import React from "react";
import { Header, LineChart } from "../../components";

const Line = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white dark:bg-black/20 rounded-3xl">
      <Header category="Charts" title="Line Chart" />
      <div className="w-full">
        <LineChart />
      </div>
    </div>
  );
};

export default Line;
