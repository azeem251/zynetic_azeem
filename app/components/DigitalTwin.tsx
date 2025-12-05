"use client";
import Image from "next/image";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import { MdBlindsClosed } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { IoIosWarning } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa6";

function DigitalTwin() {
  return (
    <div className="row gy-4 main_row">
      <div className="col-lg-3  mt-0">
        <div className="img_box">
          <Image
            src="/assets/images/main-img.png"
            alt="Logo"
            width={377}
            height={0}
            className="rounded-md"
          />
          <div className="flex px-5 mt-4 h-[45px] bg-[#151727a8] w-[350px] items-center justify-between">
            <FaLongArrowAltLeft className="text-slate-500" />
            <span className="text-xs text-slate-500 ">Font View</span>
            <FaLongArrowAltRight className="text-slate-500" />
          </div>
        </div>
      </div>
      <div className="col-lg-9 ">
        <div className="row gy-4 ">
          <div className="col-lg-8">
            <div className="row gy-4">
              <div className="col-lg-4  mt-0">
                <div className="san_box bg-[#0D111D] rounded-md px-4 py-3 flex flex-col gap-5">
                  <div>
                    <p className="mb-0 font-extralight">
                      <strong>Diagnose Charger</strong>
                    </p>
                    <p className="mb-0 text-xs text-slate-500">
                      {" "}
                      Scan to Start Diagnosis
                    </p>
                  </div>
                  <button className="bg-[#87C445] text-black text-center font-medium w-55 h-13 scan_btn">
                    {" "}
                    Scan
                  </button>
                </div>
              </div>
              <div className="col-lg-8  p-0 mt-0">
                <div className="doorWapper h-full px-4 py-3 bg-[#0D111D] rounded-md ">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="mb-0 font-extralight text-slate-300">
                        <strong>Door Status</strong>{" "}
                        <span className="text-green-400 text-xl  ml-2">●</span>
                      </p>
                      <p className="mb-0 text-xs text-slate-500">
                        Status of Charger Doors
                      </p>
                    </div>
                  </div>

                  {/* Doors Status */}
                  <div className="flex flex-wrap justify-between text-center">
                    {/* Front Door */}
                    <div className="flex-1">
                      <p className="text-xs text-[#AEAEAE] mb-1">FRONT DOOR</p>
                      <p className="text-white text-xl font-medium flex items-center justify-center gap-1">
                        <MdBlindsClosed />
                        Closed
                      </p>
                    </div>

                    {/* Divider */}
                    <div className="flex items-center mx-4 h-full">
                      {/* Top part of divider */}
                      <div className="flex-1 `h-[1px]` bg-gray-300"></div>

                      {/* Image in the middle */}
                      <img
                        src="/assets/images/devider.png"
                        alt="divider icon"
                        className="mx-2 h-25 w-.5"
                      />

                      {/* Bottom part of divider */}
                      <div className="flex-1 `h-[1px]` bg-gray-300"></div>
                    </div>

                    {/* Left Door */}
                    <div className="flex-1">
                      <p className="text-xs text-[#AEAEAE] mb-1">LEFT DOOR</p>
                      <p className="text-white text-xl font-medium flex items-center justify-center gap-1">
                        <MdBlindsClosed />
                        Closed
                      </p>
                    </div>

                    {/* Divider */}
                    <div className="flex items-center mx-4 h-full">
                      {/* Top part of divider */}
                      <div className="flex-1 `h-[1px]` bg-gray-300"></div>

                      {/* Image in the middle */}
                      <img
                        src="/assets/images/devider.png"
                        alt="divider icon"
                        className="mx-2 h-25 w-.5"
                      />

                      {/* Bottom part of divider */}
                      <div className="flex-1 `h-[1px]` bg-gray-300"></div>
                    </div>

                    {/* Right Door */}
                    <div className="flex-1">
                      <p className="text-xs text-[#AEAEAE] mb-1">RIGHT DOOR</p>
                      <p className="text-yellow-400 text-xl font-medium flex items-center justify-center gap-1">
                        <MdBlindsClosed />
                        Open
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row gy-4 pt-2">
              <div className="col-lg-6 ">
                <div className="Left_MCBWrapper bg-[#0D111D] rounded-md">
                  <div className="bg-[#0B0F19] px-3 py-2 rounded-md flex-wrap  flex justify-between items-start">
                    {/* LEFT SECTION */}
                    <div className="flex flex-col gap-4">
                      {/* MCB Heading */}
                      <p className="mb-0 font-extralight text-slate-300 flex items-center">
                        <strong className="mr-2">MCB</strong>
                        <span className="text-green-400 text-xl">●</span>
                      </p>

                      {/* DETAILS */}
                      <div className="flex flex-col  text-xs">
                        <div className="flex justify-between w-[150px]">
                          <p className="text-[#AEAEAE]">kWh</p>
                          <p className="text-[#F0F0F0]">62 kWh</p>
                        </div>

                        <div className="flex justify-between w-[150px]">
                          <p className="text-[#AEAEAE]">Hz</p>
                          <p className="text-[#F0F0F0]">60 Hz</p>
                        </div>

                        <div className="flex justify-between w-[150px]">
                          <p className="text-[#AEAEAE]">PF</p>
                          <p className="text-[#F0F0F0]">0.8 PF</p>
                        </div>

                        <div className="flex justify-between w-[150px]">
                          <p className="text-[#AEAEAE]">Earthing</p>
                          <p className="text-[#F0F0F0]">Earthing</p>
                        </div>
                      </div>
                    </div>

                    {/* RIGHT SECTION - L1 L2 L3 */}
                    <div className="flex items-end gap-6">
                      {/* L1 */}
                      <div className="flex flex-col items-center">
                        <span className="text-xs text-gray-300 mb-1">L1</span>
                        <div className="">
                          <img
                            src="/assets/images/img-1.png"
                            alt="img-1"
                            width={12}
                          />
                        </div>
                        <p className="text-[10px] text-gray-300 text-center mt-1 whitespace-nowrap">
                          1000 V <br /> 60 A
                        </p>
                      </div>

                      {/* L2 */}
                      <div className="flex flex-col items-center">
                        <span className="text-xs text-gray-300 mb-1">L2</span>
                        <div>
                          <img
                            src="/assets/images/img-2.png"
                            alt="img-1"
                            width={19}
                          />
                        </div>
                        <p className="text-[10px] text-gray-300 text-center mt-1 whitespace-nowrap">
                          1000 V <br /> 60 A
                        </p>
                      </div>

                      {/* L3 */}
                      <div className="flex flex-col items-center">
                        <span className="text-xs text-gray-300 mb-1">L3</span>
                        <div>
                          <img
                            src="/assets/images/img-3.png"
                            alt="img-1"
                            width={12}
                          />
                        </div>
                        <p className="text-[10px] text-gray-300 text-center mt-1 whitespace-nowrap">
                          1000 V <br /> 60 A
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6  p-0 ">
                <div className="p-4 bg-[#0D111D] rounded-md  h-full">
                  <p className="mb-0">Emergency stop</p>
                  <p className="mb-0 text-xs font-extralight">
                    <span>Emergency Stop Status</span>
                  </p>
                  <div className="flex justify-end pt-5 float-right flex-col">
                    <div className="flex">
                      <input
                        type="radio"
                        name="hs-default-radio"
                        className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 checked:border-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                        id="hs-default-radio"
                      />
                      <label
                        htmlFor="hs-default-radio"
                        className="text-xs text-gray-500 ms-2 dark:text-neutral-400"
                      >
                        STOP BUTTON
                      </label>
                    </div>
                    <p className="text-xs mx-3 mt-1">Not Engaged</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="row gy-4">
              <div className="col-lg-9 ">
                <div className="temprature_wrapper bg-[#0D111D]  mt-2 rounded-md p-4">
                  <div className="top_heading">
                    <p className="text-[#F0F0F0] mb-0 font-medium">
                      Temperature
                    </p>
                    <p className="text-xs text-[#AEAEAE] mb-0 font-extralight">
                      Temperature and Humidity in and around Charger
                    </p>
                  </div>
                  <div className="flex justify-start text-start flex-wrap    pt-3">
                    {/* Front Door */}
                    <div className="flex-1">
                      <p className="text-xs flex items-center gap-2 text-[#AEAEAE] mb-1">
                        <strong>
                          <img
                            src="/assets/images/device_thermostat.png"
                            alt=""
                          />
                        </strong>{" "}
                        EXTERNAL
                      </p>
                      <p className="text-white text-xl font-medium flex items-center mx-4  gap-1">
                        37° <span className="text-xs font-thin mt-2">C</span>
                      </p>
                    </div>

                    {/* Divider */}
                    <div className="flex items-center mx-4 h-full">
                      {/* Top part of divider */}
                      <div className="flex-1 `h-[1px]` bg-gray-300"></div>

                      {/* Image in the middle */}
                      <img
                        src="/assets/images/devider.png"
                        alt="divider icon"
                        className="mx-2 h-25 w-.5"
                      />

                      {/* Bottom part of divider */}
                      <div className="flex-1 `h-[1px]` bg-gray-300"></div>
                    </div>

                    {/* Left Door */}
                    <div className="flex-1">
                      <p className="text-xs flex items-center gap-2 text-[#AEAEAE] mb-1">
                        <strong>
                          <img src="/assets/images/charger.png" alt="" />
                        </strong>{" "}
                        CHARGER
                      </p>
                      <p className="text-white text-xl font-medium flex items-center mx-4  gap-1">
                        42° <span className="text-xs font-thin mt-2">C</span>
                      </p>
                    </div>

                    {/* Divider */}
                    <div className="flex items-center mx-4 h-full">
                      {/* Top part of divider */}
                      <div className="flex-1 `h-[1px]` bg-gray-300"></div>

                      {/* Image in the middle */}
                      <img
                        src="/assets/images/devider.png"
                        alt="divider icon"
                        className="mx-2 h-25 w-.5"
                      />

                      {/* Bottom part of divider */}
                      <div className="flex-1 `h-[1px]` bg-gray-300"></div>
                    </div>

                    {/* Right Door */}
                    <div className="flex-1">
                      <p className="text-xs flex items-center gap-2 text-[#AEAEAE] mb-1">
                        <strong>
                          <img src="/assets/images/grou-1.png" alt="" />
                        </strong>{" "}
                        GUN 1
                      </p>
                      <p className="text-white text-xl font-medium flex items-center mx-4  gap-1">
                        29° <span className="text-xs font-thin mt-2">C</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-start flex-wrap   pt-3">
                    {/* Front Door */}
                    <div className="flex-1">
                      <p className="text-xs flex items-center gap-2 text-[#AEAEAE] mb-1">
                        <strong>
                          <img src="/assets/images/humidity_low.png" alt="" />
                        </strong>{" "}
                        HUMIDITY
                      </p>
                      <p className="text-white text-xl font-medium flex items-center mx-4  gap-1">
                        30° <span className="text-xs font-thin mt-2">%</span>
                      </p>
                    </div>

                    {/* Divider */}
                    <div className="flex items-center mx-4 h-full">
                      {/* Top part of divider */}
                      <div className="flex-1 `h-[1px]` bg-gray-300"></div>

                      {/* Image in the middle */}
                      <img
                        src="/assets/images/devider.png"
                        alt="divider icon"
                        className="mx-2 h-25 w-.5"
                      />

                      {/* Bottom part of divider */}
                      <div className="flex-1 `h-[1px]` bg-gray-300"></div>
                    </div>

                    {/* Left Door */}
                    <div className="flex-1">
                      <p className="text-xs flex items-center gap-2 text-[#AEAEAE] mb-1">
                        <strong>
                          <img src="/assets/images/charger.png" alt="" />
                        </strong>{" "}
                        HUMIDITY
                      </p>
                      <p className="text-white text-xl font-medium flex items-center mx-4  gap-1">
                        34° <span className="text-xs font-thin mt-2">%</span>
                      </p>
                    </div>

                    {/* Divider */}
                    <div className="flex items-center mx-4 h-full">
                      {/* Top part of divider */}
                      <div className="flex-1 `h-[1px]` bg-gray-300"></div>

                      {/* Image in the middle */}
                      <img
                        src="/assets/images/devider.png"
                        alt="divider icon"
                        className="mx-2 h-25 w-.5"
                      />

                      {/* Bottom part of divider */}
                      <div className="flex-1 `h-[1px]` bg-gray-300"></div>
                    </div>

                    {/* Right Door */}
                    <div className="flex-1">
                      <p className="text-xs flex items-center gap-2 text-[#AEAEAE] mb-1">
                        <strong>
                          <img src="/assets/images/grou-1.png" alt="" />
                        </strong>{" "}
                        GUN 2
                      </p>
                      <p className="text-white text-xl font-medium flex items-center mx-4  gap-1">
                        39° <span className="text-xs font-thin mt-2">C</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3  p-0">
                <div className="gun_status_wrapper  p-3 bg-[#0D111D] mt-2 rounded-md">
                  <div className="gun_heading">
                    <p className="mb-0 text-sm">Gun Status</p>
                    <p className="mb-0 text-xs font-thin">
                      Gun Armed/Charging Status
                    </p>
                  </div>
                  <div className="flex flex-col gap-12 pt-5">
                    <div className="flex gap-4">
                      <div>
                        <img src="/assets/images/CCS2.png" alt="" />
                      </div>
                      <div>
                        <p className="mb-0 font-thin text-xs">GUN 1</p>
                        <p className="mb-0 text-sm">ARMED</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div>
                        <img src="/assets/images/CCS2.png" alt="" />
                      </div>
                      <div>
                        <p className="mb-0 font-thin text-xs">GUN 1</p>
                        <p className="mb-0 text-[#46EB4F] text-sm">Charging</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4  mt-0">
            <div className="right_main_wrapper p-3 rounded-md bg-[#0D111D] scroll-smooth">
              <div className="notification_box flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img
                    src="/assets/images/view_object_track.png"
                    alt="view_object_track"
                  />
                  <span className="">Live Notifications</span>
                </div>
                <div className="btnMore ">
                  <button className="text-[#4C8AF0] flex items-center font-extralight text-xs">
                    More <MdOutlineKeyboardArrowRight className="mt-1" />
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-2 mt-3 h-[573px] overflow-y-auto pr-1 custom-scroll">
                <div className="messageBoxes bg-[#101625] p-3 rounded-md">
                  <div className="flex justify-between items-center pr-3 text-xs ">
                    <span className="text-[#ADB7D2]  font-medium">
                      13/06/2025 | 09:04:34
                    </span>
                    <button className="bg-[#FFD05A33] flex items-center waring_btn  gap-1.5 px-2 py-1  text-[#FF9500]">
                      <IoIosWarning />
                      000004
                    </button>
                  </div>
                  <div className="flex mt-3 justify-between text-xs  items-center">
                    <strong>OverCurrentFailure</strong>
                    <p className="mb-0">
                      <FaArrowRight />
                    </p>
                  </div>
                </div>
                <div className="messageBoxes bg-[#101625] p-3 rounded-md">
                  <div className="flex justify-between items-center pr-3 text-xs ">
                    <span className="text-[#ADB7D2] font-medium">
                      13/06/2025 | 09:04:34
                    </span>
                    <button className="bg-[#FF5A6533] flex items-center waring_btn  gap-1.5 px-2 py-1  text-[#E74739]">
                      <IoIosWarning />
                      000014
                    </button>
                  </div>
                  <div className="flex mt-3 justify-between text-xs items-center">
                    <strong>The EVSE has no internet connectivity</strong>
                    <p className="mb-0">
                      <FaArrowRight />
                    </p>
                  </div>
                </div>
                <div className="messageBoxes bg-[#101625] p-3 rounded-md">
                  <div className="flex justify-between items-center pr-3 text-xs ">
                    <span className="text-[#ADB7D2] font-medium">
                      13/06/2025 | 09:04:34
                    </span>
                    <button className="bg-[#FFD05A33] flex items-center waring_btn  gap-1.5 px-2 py-1  text-[#FF9500]">
                      <IoIosWarning />
                      000004
                    </button>
                  </div>
                  <div className="flex mt-3 justify-between text-xs items-center">
                    <strong>PowerLoss</strong>
                    <p className="mb-0">
                      <FaArrowRight />
                    </p>
                  </div>
                </div>
                <div className="messageBoxes bg-[#101625] p-3 rounded-md">
                  <div className="flex justify-between items-center pr-3 text-xs ">
                    <span className="text-[#ADB7D2] font-medium">
                      13/06/2025 | 09:04:34
                    </span>
                    <button className="bg-[#FF5A6533] flex items-center waring_btn  gap-1.5 px-2 py-1  text-[#E74739]">
                      <IoIosWarning />
                      000015
                    </button>
                  </div>
                  <div className="flex mt-3 justify-between text-xs items-center">
                    <strong>REMOTE_STOP</strong>
                    <p className="mb-0">
                      <FaArrowRight />
                    </p>
                  </div>
                </div>
                <div className="messageBoxes bg-[#101625] p-3 rounded-md">
                  <div className="flex justify-between items-center pr-3 text-xs ">
                    <span className="text-[#ADB7D2] font-medium">
                      13/06/2025 | 09:04:34
                    </span>
                    <button className="bg-[#FFD05A33] flex items-center waring_btn  gap-1.5 px-2 py-1  text-[#FF9500]">
                      <IoIosWarning />
                      000004
                    </button>
                  </div>
                  <div className="flex mt-3 justify-between text-xs items-center">
                    <strong>Power Loss</strong>
                    <p className="mb-0">
                      <FaArrowRight />
                    </p>
                  </div>
                </div>
                <div className="messageBoxes bg-[#101625] p-3 rounded-md">
                  <div className="flex justify-between items-center pr-3 text-xs ">
                    <span className="text-[#ADB7D2] font-medium">
                      13/06/2025 | 09:04:34
                    </span>
                    <button className="bg-[#FF5A6533] flex items-center waring_btn  gap-1.5 px-2 py-1  text-[#E74739]">
                      <IoIosWarning />
                      000085
                    </button>
                  </div>
                  <div className="flex mt-3 justify-between text-xs items-center">
                    <strong>NFC_STOP</strong>
                    <p className="mb-0">
                      <FaArrowRight />
                    </p>
                  </div>
                </div>
                <div className="messageBoxes bg-[#101625] p-3 rounded-md">
                  <div className="flex justify-between items-center pr-3 text-xs ">
                    <span className="text-[#ADB7D2] font-medium">
                      13/06/2025 | 09:04:34
                    </span>
                    <button className="bg-[#FFD05A33] flex items-center waring_btn  gap-1.5 px-2 py-1  text-[#FF9500]">
                      <IoIosWarning />
                      000004
                    </button>
                  </div>
                  <div className="flex mt-3 justify-between text-xs items-center">
                    <strong>Power Loss</strong>
                    <p className="mb-0">
                      <FaArrowRight />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DigitalTwin;
