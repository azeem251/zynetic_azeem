"use client";
import { IoIosArrowForward } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import { FiChevronDown } from "react-icons/fi";
import { IoFilterOutline } from "react-icons/io5";

function Header() {
  return (
    <header
      className="
    header_wrapper h-auto 
    flex flex-wrap gap-3 
    items-center justify-between 
    px-3 py-2
  "
    >
      {/* left */}
      <div className="flex items-center gap-2 w-full md:w-auto">
        <img src="/assets/images/home.png" alt="" />
        <IoIosArrowForward className="text-[#ADB7D2] pt-.5" />
        <span className="text-xs">Charger Management</span>
      </div>

      {/* right */}
      <div
        className="
      flex flex-wrap 
      items-center 
      gap-3 md:gap-12 
      w-full md:w-auto 
      justify-between md:justify-end
    "
      >
        <div
          className="
        flex flex-wrap 
        md:flex-nowrap 
        items-center 
        gap-3 
        w-full md:w-auto
      "
        >
          {/* Dropdown */}
          <form className="w-[48%] md:w-auto">
            <select
              id="countries"
              className="
            w-full md:w-[110px]
            block py-2 px-3
            bg-[#3b3b3b30]
            text-white text-sm 
            rounded-base
            outline-none
            border-0
            shadow-[0px_0px_10px_0px_rgba(0,0,0,0.4)]
            focus:ring-0
          "
            >
              <option className="text-black" value="">
                Vendor
              </option>
              <option className="text-black" value="US">
                USA
              </option>
              <option className="text-black" value="CA">
                CA
              </option>
              <option className="text-black" value="FR">
                FR
              </option>
              <option className="text-black" value="DE">
                GR
              </option>
            </select>
          </form>

          {/* Search Input */}
          <div
            className="
          search_input 
          bg-[#3b3b3b30] 
          shadow-[0px_0px_10px_0px_rgba(0,0,0,0.4)]
          flex items-center 
          px-3 py-2 
          rounded-base
          text-gray-400
          w-full md:w-auto
          gap-3
        "
          >
            <FiSearch size={18} className="text-gray-300" />

            <input
              type="text"
              placeholder="Charger / Hub"
              className="
            bg-transparent 
            outline-none 
            text-white 
            w-full 
            placeholder:text-gray-400
          "
            />

            <div className="flex items-center gap-1 cursor-pointer select-none">
              <span className="text-white text-sm">All</span>
              <FiChevronDown
                size={18}
                className="text-gray-300 cursor-pointer"
              />
            </div>
          </div>

          {/* Filter Button */}
          <div
            className="
          filer_div cursor-pointer 
          flex items-center gap-1 
          p-2 rounded-sm 
          text-xs bg-[#3b3b3b30] 
          border border-slate-500 
          w-[80px]
        "
          >
            <IoFilterOutline /> <span>Filter</span>
          </div>
        </div>

        {/* Icons */}
        <div
          className="
        icons_wrapper 
        flex gap-3 
        justify-start md:justify-between 
        w-full md:w-auto
      "
        >
          <div className="cursor-pointer">
            <img
              src="/assets/images/notifications.png"
              width={35}
              alt="notifications"
            />
          </div>
          <div className="cursor-pointer">
            <img src="/assets/images/help.png" alt="help" width={35} />
          </div>
          <div className="cursor-pointer">
            <img src="/assets/images/add.png" alt="add" width={35} />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
