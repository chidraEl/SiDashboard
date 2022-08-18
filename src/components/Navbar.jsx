import React, { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import avatar from "../data/avatar.jpg";
import { Chat, Notification, UserProfile } from ".";
import { useStateContext } from "../contexts/ContextProvider";

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={customFunc}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-gray-100/60 dark:hover:bg-secondary-dark-bg"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
      {icon}
    </button>
  </TooltipComponent>
);

// const handleClick = () => {};

const Navbar = () => {
  const {
    setActiveMenu,
    isClicked,
    handleClick,
    screenSize,
    setScreenSize,
    currentColor,
  } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
    // eslint-disable-next-line
  }, [screenSize]);

  return (
    <div className="fixed md:static bg-white dark:bg-black/90 navbar w-full">
      <div className="flex justify-between p-2 md:px-6 relative">
        <NavButton
          title="Menu"
          customFunc={() => setActiveMenu((prev) => !prev)}
          color={currentColor}
          icon={<AiOutlineMenu />}
        />

        <div className="flex">
          <NavButton
            title="Chat"
            dotColor="#03C907"
            customFunc={() => handleClick("chat")}
            color={currentColor}
            icon={<BsChatLeft />}
          />
          <NavButton
            title="Notifications"
            dotColor="#03C907"
            customFunc={() => handleClick("notifications")}
            color={currentColor}
            icon={<RiNotification3Line />}
          />
          <TooltipComponent content="Profile" position="BottomCenter">
            <div
              className="flex items-center gap-1 cursor-pointer p-1 hover:bg-light-gray dark:hover:bg-secondary-dark-bg rounded-lg ml-4"
              onClick={() => handleClick("userProfile")}
            >
              <img
                src={avatar}
                className="rounded-full w-9 h-9 mr-1 border-1 border-gray-300"
                style={{ padding: "2px" }}
                alt=""
              />
              <p className="text-gray-400 text-14">
                <span>Hi, </span>
                <span className="font-bold ml-1">Rachid</span>
              </p>
              <MdKeyboardArrowDown className="text-gray-400 text-md" />
            </div>
          </TooltipComponent>

          {isClicked.chat && <Chat />}
          {isClicked.notifications && <Notification />}
          {isClicked.userProfile && <UserProfile />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
