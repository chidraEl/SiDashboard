import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";
import { Stacked, Button, SparkLine, Pie, LineChart } from "../components";
import {
  earningData,
  ecomPieChartData,
  SparklineAreaData,
  recentTransactions,
} from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";

const Home = () => {
  const { currentColor } = useStateContext();
  return (
    <div className="md:px-10 m-3">
      <div className="flex flex-wrap justify-center items-center gap-3">
        <div className="bg-white dark:text-gray-200 dark:bg-black/20 rounded-xl w-full p-8  bg-welcome-bg bg-no-repeat bg-cover bg-center shadow-xl shadow-gray-200/40 dark:shadow-gray-900/40 mb-10">
          <div className="flex justify-start gap-10 items-center">
            <div>
              <p className="mb-1 text-gray-800 dark:text-white">Earnings</p>
              <p className="text-4xl font-bold">$120,215.80</p>
            </div>
            <div
              className="text-white p-4 rounded-full text-2xl"
              style={{ backgroundColor: currentColor }}
            >
              <BsCurrencyDollar />
            </div>
          </div>
          <div className="mt-6">
            <Button
              color="white"
              bgColor={currentColor}
              text="download"
              borderRadius="10px"
              size="md"
            />
          </div>
        </div>
        <div className="justify-center gap-6 items-center grid grid-cols-2 xl:grid-cols-4 w-full">
          {earningData.map((item) => (
            <div
              key={item.title}
              className="bg-white dark:bg-black/20 dark:text-gray-200 dark-bg-secondary-dark-bg p-4 shadow-md shadow-gray-200/40 dark:shadow-gray-900/40 pt-9 rounded-2xl"
            >
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className="text-2xl opacity-80 rounded-full p-4"
              >
                {item.icon}
              </button>
              <p className="mt-3">
                <span className="text-xl font-semibold">{item.amount}</span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>
                  {item.percentage}
                </span>
              </p>
              <p className="text-sm text-gray-400 mt-1">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-6 flex-wrap justify-between mt-10">
        <div className="bg-white dark:bg-black/20 rounded-2xl p-6 w-full md:w-auto">
          <div className="flex justify-between">
            <p className="font-semibold text-xl dark:text-white">
              Revenue Updates
            </p>
            <div className="flex items-center gap-4">
              <p className="items-center flex gap-2 text-gray-600 hover:drop-shadow-xl dark:text-white">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Expense</span>
              </p>
              <p className="items-center flex gap-2 text-green-500 hover:drop-shadow-xl">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Budget</span>
              </p>
            </div>
          </div>
          <div className="mt-10 gap-8 flex flex-col md:flex-row justify-center">
            <div className="md:border-r-1 border-color dark:border-gray-800 pr-10 p-8 w-full md:w-auto">
              <div>
                <p>
                  <span className="text-3xl font-extrabold dark:text-white">
                    $29,322
                  </span>
                  <span className="px-1.5 py-2.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-600 ml-3 text-sm">
                    63%
                  </span>
                </p>
                <p className="text-gray-500 mt-1 dark:text-gray-400">Budget</p>
              </div>
              <div className="mt-5">
                <p>
                  <span className="text-3xl font-extrabold dark:text-white">
                    $7,111
                  </span>
                </p>
                <p className="text-gray-500 mt-1 dark:text-gray-400">
                  Expenses
                </p>
              </div>

              <div className="mt-5">
                <SparkLine
                  currentColor={currentColor}
                  id="line-sparline"
                  type="Area"
                  height="90px"
                  width="100%"
                  data={SparklineAreaData}
                  color={currentColor}
                />
              </div>
              <div className="mt-10 flex justify-center">
                <Button
                  color={currentColor}
                  text="Download report"
                  bgColor=""
                  border={`1px solid ${currentColor}`}
                  borderRadius="10px"
                />
              </div>
            </div>

            <div className="pr-10 p-8 w-full md:w-auto flex justify-center">
              <Stacked width="320px" height="360px" id="stack-chart" />
            </div>
          </div>
        </div>

        <div className="flex flex-wrap lg:flex-col gap-4">
          <div
            className="p-4 pt-10 text-white rounded-2xl"
            style={{ backgroundColor: currentColor }}
          >
            <div className="flex justify-between">
              <p className="text-xl font-bold">Earnings</p>
              <div>
                <p className="text-xl font-bold">$63,013</p>
                <p className="">Monthly revenue</p>
              </div>
            </div>
            <div className="mt-6">
              <SparkLine
                currentColor={currentColor}
                id="column-chart"
                height="100px"
                type="Column"
                data={SparklineAreaData}
                width="320"
                color="#fff"
              />
            </div>
          </div>
          <div className="p-10 dark:text-white text-black rounded-2xl  bg-white dark:bg-black/20 flex gap-6 justify-center">
            <div className="flex justify-center flex-col">
              <p className="text-xl font-bold">$63,013</p>
              <p className="">Yearly sales</p>
            </div>
            <div className="mt-6">
              <Pie
                id="pie-chart"
                height="180px"
                data={ecomPieChartData}
                legendVisiblity={false}
              />
            </div>
          </div>
        </div>
      </div>

      <div className=" columns-1 lg:columns-2 w-full mt-10 gap-10">
        <div className="bg-white dark:bg-black/20 rounded-2xl p-8 w-full mb-4">
          <div className="flex justify-between">
            <p className="text-xl font-bold dark:text-white">
              Recent Transactions
            </p>
            <p className="text-sm dark:text-gray-300">July 2022</p>
          </div>
          <div className="flex gap-2 flex-col mt-10 w-full">
            {recentTransactions.map((item, index) => (
              <div
                className="flex justify-between w-full hover:bg-gray-300/30 dark:hover:bg-gray-600/20 p-2 rounded-xl"
                key={index}
              >
                <div className="flex gap-4">
                  <div
                    className="flex justify-center p-4 rounded-xl text-3xl"
                    style={{
                      backgroundColor: item.iconBg,
                      color: item.iconColor,
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-bold text-xl mb-1 dark:text-white">
                      {item.title}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      {item.desc}
                    </p>
                  </div>
                </div>
                <div>
                  <p className={`text-lg font-medium text-${item.pcColor}`}>
                    {item.amount}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-end mt-4">
            <button className="text-gray-600 dark:text-gray-400 dark:hover:bg-gray-500/20 hover:bg-gray-300/40 py-2 px-3 rounded-lg">
              Show all Transactions
            </button>
          </div>
        </div>

        <div className="bg-white dark:bg-black/20 rounded-2xl p-8 w-full">
          <div className="flex justify-between">
            <p className="text-xl font-bold dark:text-white">Sales Overview</p>
            <p className="text-sm dark:text-gray-400">July 2022</p>
          </div>
          <div className="mt-10 w-full">
            <LineChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
