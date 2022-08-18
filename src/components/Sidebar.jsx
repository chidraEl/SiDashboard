import React from "react";
import { Link, NavLink } from "react-router-dom";
import { SiDashlane } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { useStateContext } from "../contexts/ContextProvider";
import { links } from "../data/dummy";

const Sidebar = () => {
  const { activeMenu, setActiveMenu, screenSize, currentColor } =
    useStateContext();

  const handleCloseSideBar = () => {
    if (activeMenu && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  const activeLink =
    "flex p-2 pl-3 hover:pl-3 duration-200 text-md md:text-sm items-center gap-3 rounded-full mr-2 text-white mb-1";
  const normalLink =
    "flex p-2 pl-3 hover:pl-4 duration-200 text-md md:text-sm text-black items-center gap-3 rounded-full mr-2 text-white text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-gray-200 mb-1";

  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center border-b-2 border-gray-200 dark:border-gray-800 py-3">
            <Link
              to="/dashboard"
              onClick={handleCloseSideBar}
              className="items-center gap-3 ml-3 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900"
            >
              <SiDashlane />
              <span>SiDashboard</span>
            </Link>
            <TooltipComponent content="Menu" position="BottomCenter">
              <button
                className="text-2xl rounded-full mt-1 mr-2 block md:hidden text-gray-500 dark:text-white hover:text-black"
                type="button"
                onClick={() =>
                  setActiveMenu((prevActiveMenu) => !prevActiveMenu)
                }
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>

          <div className="mt-6">
            {links.map((item) => (
              <div key={item.title}>
                <p className="text-gray-400 mt-4 text-lg uppercase font-extrabold mb-2">
                  {item.title}
                </p>
                <div className="flex flex-col ml-4">
                  {item.links.map((link) => (
                    <NavLink
                      to={`/${link.name}`}
                      key={link.name}
                      style={({ isActive }) => ({
                        backgroundColor: isActive ? currentColor : "",
                      })}
                      onClick={handleCloseSideBar}
                      className={({ isActive }) =>
                        isActive ? activeLink : normalLink
                      }
                    >
                      {link.icon}
                      <span className="capitalize">{link.name}</span>
                    </NavLink>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
