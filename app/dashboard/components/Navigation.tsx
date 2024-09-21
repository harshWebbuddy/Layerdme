import Image from "next/image";
import React from "react";
import ProfileButton from "./ProfileButton";
import { useSelector } from "react-redux";
import { IReduxValue } from "@/types/redux";
import { IUser } from "@/types/IUser";

export default function Navigation() {
  const user = useSelector<IReduxValue, IUser>((state) => state.user.data);
  return (
    <nav className="m-3 sm:m-5 p-1 sm:p-3 z-10">
      <div className="flex items-center justify-between">
        <div>
          <div className="space-y-1 hidden sm:block">
            {user.firstname && (
              <h1 className="text-[23px] font-semibold">
                Hi, {user.firstname} {user.lastname}
              </h1>
            )}
            <p className="text-sm capitalize">Welcome to world of AI</p>
          </div>
        </div>
        <div className="flex gap-4 sm:gap-6 items-center">
          <div className="cursor-pointer">
            <Image
              src="/svgs/moon-stars.svg"
              alt="Moon starts"
              height={25}
              width={25}
              className="w-6"
              draggable={false}
            />
          </div>
          <div className="relative cursor-pointer">
            <Image
              src="/svgs/bell.svg"
              alt="Moon starts"
              height={25}
              width={25}
              className="w-6"
              draggable={false}
            />
            {/* <div className="absolute -top-2 -right-2 bg-[#EA5455] w-5 h-5 rounded-full grid place-content-center text-xs">
              0
            </div> */}
          </div>
          <ProfileButton />
        </div>
      </div>
    </nav>
  );
}
