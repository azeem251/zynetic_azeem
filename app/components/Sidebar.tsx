"use client";
import { useState } from "react";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hamburger Button for Mobile */}
      <button
        className="lg:hidden fixed top-5 left-5 z-50 bg-[#0D1829] p-2 rounded-md text-white"
        onClick={() => setIsOpen(true)}
      >
        <FiMenu size={24} />
      </button>

      {/* Overlay for mobile when sidebar open */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Sidebar */}
      <div
        className={`
          fixed top-0 left-0 pt-5 h-full w-20 bg-[#0D1829] border-r border-gray-800 flex flex-col items-center py-6 space-y-6 z-50
          transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"} 
          lg:translate-x-0
        `}
      >
        {/* Close Button on Mobile */}
        <div className="lg:hidden self-end pr-2">
          <button onClick={() => setIsOpen(false)}>
            <FiX size={24} className="text-white" />
          </button>
        </div>

        {/* Logo */}
        <div className="text-white text-2xl font-bold">
          <a href="#">
            <Image
              src="/assets/images/logo.png"
              width={40}
              height={40}
              className="rounded-full"
              alt="Logo"
            />
          </a>
        </div>

        {/* Menu Items */}
        <div>
          <ul className="flex flex-col gap-11 items-center pt-5">
            <li>
              <a href="#">
                <img src="/assets/images/s-1.png" alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="/assets/images/s-2.png" alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="/assets/images/s-3.png" alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="/assets/images/s-4.png" alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="/assets/images/s-5.png" alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="/assets/images/s-6.png" alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="/assets/images/s-7.png" alt="" />
              </a>
            </li>
          </ul>
        </div>

        {/* User */}
        <div className="mt-auto userMain">
          <img
            className="w-10 h-10 rounded-full"
            src="/assets/images/user-logo.png"
            alt="User"
          />
        </div>
      </div>
    </>
  );
}
