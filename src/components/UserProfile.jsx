import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { Button } from ".";
import { userProfileData } from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";
import avatar from "../data/avatar.jpg";

const UserProfile = () => {
  const { currentColor, handleClick } = useStateContext();

  return (
    <div className="bg-white dark:bg-main-dark-bg shadow-xl dark:shadow-black/50 absolute top-14 md:top-16 right-0 md:right-6 rounded-xl p-6 w-full md:w-400 lg:w-760 nav-item">
      <div className="flex justify-between">
        <div className="flex justify-center flex-col">
          <p className="text-black dark:text-white font-semibold text-xl">
            User Profile
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
        <div className="flex gap-6">
          <div>
            <img
              src={avatar}
              alt="profile"
              className="rounded-full w-20 h-20"
            />
          </div>
          <div className="leading-5">
            <p className="font-bold text-xl dark:text-white">
              Rachid El khalil
            </p>
            <p className="text-gray-400">Administrator</p>
            <p className="text-gray-400">elkhalilrachid94@gmail.com</p>
          </div>
        </div>
        <div className="mt-3 pt-3 border-t-1 dark:border-gray-600">
          {userProfileData.map((item, index) => (
            <div
              key={index}
              className="flex mb-1 items-center gap-5 p-3 leading-8 cursor-pointer hover:bg-gray-50 dark:hover:bg-black/30 duration-200 rounded-md border-b-1 border-gray-50 dark:border-gray-700/60"
            >
              <div
                className="p-3 text-xl rounded-lg"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
              >
                {item.icon}
              </div>
              <div className="leading-4">
                <p className="text-lg font-semibold dark:text-gray-200 ">
                  {item.title}
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
          <div className="mt-4 flex justify-center">
            <Button
              bgColor={currentColor}
              color="#fff"
              size="md w-full"
              text="Logout"
              borderRadius="10px"
              border={`1px solid ${currentColor}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
