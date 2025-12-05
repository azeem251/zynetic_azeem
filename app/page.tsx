"use client";
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import { CiCircleInfo } from "react-icons/ci";
import { FaChargingStation } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { LuLayoutDashboard } from "react-icons/lu";
import { PiSealWarning } from "react-icons/pi";
import DigitalTwin from "./components/DigitalTwin";

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("digital");
  return (
    <div className="min-h-screen  ">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col margin_leftMain pt-5">
        {/* Header */}
        <Header />

        {/* Top Section */}
        <section
          className="
  top_wrapper 
  flex-wrap
  gap-4
  flex items-center justify-between 
  px-5 py-3 mt-4 
  bg-[#151727a8] 
  rounded-tl-[35px] 
  rounded-tr-[35px]
"
        >
          {/* left */}
          <div className="left_box flex items-center gap-3">
            <FaArrowLeftLong />
            <img src="assets/images/ev_station.png" alt="" />
            <div>
              <strong className="text-xs text-heading">ZYNIND001</strong>
              <em className="mb-0  flex flex-col">
                <span className="text-xs -mt-2 inline-block text-gray-400">
                  80 kW-Dual Gun
                </span>
              </em>
            </div>
          </div>
          <div className="right_arrow flex gap-3">
            <div className="flex gap-2 cursor-pointer items-center p-2 border-1 rounded-sm border-slate-500 bg-[#01051133]">
              <FaPlus className="text-slate-400 text-xs" />
              <span className="text-slate-400 text-xs">Add Charger</span>
            </div>
            <div className="bg-[#30303133] flex items-center w-[35px] justify-center cursor-pointer">
              <FaArrowDown className="text-slate-400 " />
            </div>
          </div>
        </section>

        {/* Bottom Section */}
        <div className=" mt-6 pt-4">
          <div className="w-full">
            {/* Tabs */}
            <div
              className="
  tabs_buttons
    flex flex-wrap justify-between border-b border-gray-600
    px-5 md:px-0 lg:px-5
    gap-3 md:gap-4
  "
            >
              {/* Info Tab */}
              <button
                onClick={() => setActiveTab("info")}
                className={`
      pb-2 text-sm font-medium flex items-center gap-2
      ${
        activeTab === "info"
          ? "text-[#87C445] border-b-2 border-[#87C445]"
          : "text-gray-400"
      }
    `}
              >
                <CiCircleInfo
                  size={18}
                  className={
                    activeTab === "info" ? "text-[#87C445]" : "text-gray-400"
                  }
                />
                Info
              </button>

              {/* Digital Twin */}
              <button
                onClick={() => setActiveTab("digital")}
                className={`
      pb-2 text-sm font-medium flex items-center gap-2
      ${
        activeTab === "digital"
          ? "text-[#87C445] border-b-2 border-[#87C445]"
          : "text-gray-400"
      }
    `}
              >
                <FaChargingStation
                  size={18}
                  className={
                    activeTab === "digital" ? "text-[#87C445]" : "text-gray-400"
                  }
                />
                Digital Twin
              </button>

              {/* Fault */}
              <button
                onClick={() => setActiveTab("fault")}
                className={`
      pb-2 text-sm font-medium flex items-center gap-2
      ${
        activeTab === "fault"
          ? "text-[#87C445] border-b-2 border-[#87C445]"
          : "text-gray-400"
      }
    `}
              >
                <IoIosNotifications
                  size={18}
                  className={
                    activeTab === "fault" ? "text-[#87C445]" : "text-gray-400"
                  }
                />
                Fault
              </button>

              {/* Alarm */}
              <button
                onClick={() => setActiveTab("alarm")}
                className={`
      pb-2 text-sm font-medium flex items-center gap-2
      ${
        activeTab === "alarm"
          ? "text-[#87C445] border-b-2 border-[#87C445]"
          : "text-gray-400"
      }
    `}
              >
                <CiCircleInfo
                  size={18}
                  className={
                    activeTab === "alarm" ? "text-[#87C445]" : "text-gray-400"
                  }
                />
                Alarm
              </button>

              {/* Configuration */}
              <button
                onClick={() => setActiveTab("config")}
                className={`
      pb-2 text-sm font-medium flex items-center gap-2
      ${
        activeTab === "config"
          ? "text-[#87C445] border-b-2 border-[#87C445]"
          : "text-gray-400"
      }
    `}
              >
                <LuLayoutDashboard
                  size={18}
                  className={
                    activeTab === "config" ? "text-[#87C445]" : "text-gray-400"
                  }
                />
                Configuration
              </button>

              {/* Maintenance */}
              <button
                onClick={() => setActiveTab("maintenance")}
                className={`
      pb-2 text-sm font-medium flex items-center gap-2
      ${
        activeTab === "maintenance"
          ? "text-[#87C445] border-b-2 border-[#87C445]"
          : "text-gray-400"
      }
    `}
              >
                <PiSealWarning
                  size={18}
                  className={
                    activeTab === "maintenance"
                      ? "text-[#87C445]"
                      : "text-gray-400"
                  }
                />
                Maintenance
              </button>
            </div>

            {/* Tab Content */}
            <div className="mt-5 text-gray-300">
              {activeTab === "info" && (
                <div>
                  <h3 className="text-lg font-semibold mb-2">Info Section</h3>
                  <p>This is the Info tab content.</p>
                </div>
              )}

              {activeTab === "digital" && <DigitalTwin />}

              {activeTab === "fault" && (
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Fault Alarm Section
                  </h3>
                  <p>This is the Fault Alarm content.</p>
                </div>
              )}

              {activeTab === "config" && (
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Configuration Section
                  </h3>
                  <p>This is the Configuration content.</p>
                </div>
              )}
              {activeTab === "maintenance" && (
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Maintenance Section
                  </h3>
                  <p>This is the Maintenance content.</p>
                </div>
              )}
              {activeTab === "alarm" && (
                <div>
                  <h3 className="text-lg font-semibold mb-2">Alarm Section</h3>
                  <p>This is the Alarm content.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
