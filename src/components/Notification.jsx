import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { Button } from ".";
import { chatData } from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";

const Notification = () => {
  const { currentColor, handleClick } = useStateContext();

  return (
    <div className="bg-white dark:bg-main-dark-bg shadow-xl dark:shadow-black/50 absolute top-14 md:top-16 right-0 md:right-20 rounded-xl p-6 w-full md:w-400 lg:w-760 nav-item">
      <div className="flex justify-between">
        <div className="flex justify-center flex-col">
          <p className="text-black dark:text-white font-bold text-xl">
            Notifications
          </p>
        </div>
        <div>
          <Button
            icon={<MdOutlineCancel />}
            color="rgb(153, 171, 180)"
            bgHoverColor="light-gray"
            size="2xl"
            borderRadius="50%"
            func={() => handleClick("chat")}
          />
        </div>
      </div>
      <div className="mt-3">
        <div className="mt-5">
          {chatData?.map((item, index) => (
            <div
              key={index}
              className="flex mb-1 items-center gap-5 p-3 leading-8 cursor-pointer hover:bg-white dark:bg-black/5 dark:hover:bg-black/20 hover:-translate-y-1 duration-200 hover:shadow-lg shadow-gray-100/10 rounded-xl border-1 border-gray-50 dark:border-black/10 "
            >
              <div className="relative">
                <img
                  className="rounded-full h-10 w-10"
                  src={item.image}
                  alt={item.message}
                />
                <span
                  style={{ background: item.dotColor }}
                  className="absolute inline-flex rounded-full h-2 w-2 right-0 -top-1"
                />
              </div>
              <div>
                <p className="font-semibold dark:text-gray-200 ">
                  {item.message}
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  {item.desc}
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-xs">
                  {item.time}
                </p>
              </div>
            </div>
          ))}
          <div className="mt-5 flex justify-center">
            <Button
              color="white"
              text="See all notifications"
              size="md w-full"
              borderRadius="10px"
              bgColor={currentColor}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
