import React from "react";
import GridShape from "../../components/Admin/common/GridShape";
import { Link } from "react-router";
import ThemeTogglerTwo from "../../components/Admin/common/ThemeTogglerTwo";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative p-6 bg-white z-1 dark:bg-gray-900 sm:p-0">
      <div className="relative flex flex-col justify-center w-full h-screen lg:flex-row dark:bg-gray-900 sm:p-0">
        {children}
        <div className="items-center hidden w-full h-full lg:w-1/2 bg-black dark:bg-white lg:grid">
        {/* <div className="items-center hidden w-full h-full lg:w-1/2 bg-gray-900 dark:bg-gray-800 lg:grid"> */}
          <div className="relative flex items-center justify-center z-1">
            {/* <!-- ===== Common Grid Shape Start ===== --> */}
            <GridShape />
            <div className="flex flex-col items-center">
              <Link to="/signin" className="block mb-4">
                <img
                  // width={231}
                  // height={248}
                  src="/images/others/medical3.png"
                  alt="Logo"
                />
              </Link>
              <p className="text-center text-gray-400 dark:text-white/60">
                
              </p>
            </div>
          </div>
        </div>
        <div className="fixed z-50 hidden bottom-6 right-6 sm:block">
          <ThemeTogglerTwo />
        </div>
      </div>
    </div>
  );
}
