"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";
import { IReduxValue } from "@/types/redux";
import { useDispatch, useSelector } from "react-redux";
import { IUser } from "@/types/IUser";
import { useRouter } from "next/navigation";
import { setUser } from "@/features/userSlice";
interface Props {
  isOpen: boolean;
  onClose: () => void;
}
export default function ProfilePopup({ isOpen, onClose }: Props) {
  const router = useRouter();
  const linkItems = [
    {
      link: "/dashboard/account",
      image: "/main/user.svg",
      title: "view profile",
    },
    {
      link: "/dashboard/account/passwords",
      image: "/main/key.svg",
      title: "Change password",
    },
    {
      link: "/dashboard/subscription/plans",
      image: "/main/credit-card.svg",
      title: "Subscription Plans",
    },
    {
      link: "/dashboard/team/members",
      image: "/main/users.svg",
      title: "Team Members",
    },
    {
      link: "/dashboard/affiliates",
      image: "/main/file-dollar.svg",
      title: "Affiliate program",
    },
  ];
  const subMenuAnimate = {
    enter: {
      opacity: 1,
      translateY: 5,
      transition: {
        duration: 0.1,
      },
      display: "block",
    },
    exit: {
      opacity: 0,
      translateY: -5,
      transition: {
        duration: 0.1,
        delay: 0.1,
      },
      transitionEnd: {
        display: "none",
      },
    },
  };

  const user = useSelector<IReduxValue, IUser>((state) => state.user.data);
  const dispatch = useDispatch();

  return (
    <motion.div
      initial="exit"
      animate={isOpen ? "enter" : "exit"}
      variants={subMenuAnimate}
      className="absolute right-0 mt-4 z-[9999]"
    >
      <div className="w-[300px] border-gradient z-[2] bg-[#1616163a] backdrop-blur-3xl rounded-lg">
        <div className="bg-gradient-to-br from-[#ffffff1f] to-[#8f8f8f05] z-10 p-3 pt-6 relative rounded-2xl">
          {user.firstname && (
            <div className="text-center">
              <h1 className="text-xl font-semibold">
                {user.firstname} {user.lastname}
              </h1>
              {user.role && <p className="text-white/80">{user.role}</p>}
              <div className="bg-gradient-to-r from-[#FFFFFF00] via-[#ffffff62] to-[#ffffff00] h-[2px] w-full my-4" />
            </div>
          )}
          <div className="space-y-2">
            <h1 className="uppercase text-white/70 text-sm px-2">General</h1>
            <div className="mt-2">
              {linkItems.slice(0, 2).map((item, index) => (
                <Link
                  href={item.link}
                  onClick={() => onClose()}
                  className="flex gap-3 items-center p-3 hover:bg-[#ffffff0c] rounded-lg transition capitalize"
                  key={index}
                >
                  <Image src={item.image} alt="Icon" width={20} height={20} />
                  <p className="capitalize">{item.title}</p>
                </Link>
              ))}
            </div>
          </div>
          <div className="space-y-2 mt-3">
            <h1 className="uppercase text-white/70 text-sm px-2">Account</h1>
            <div className="mt-2">
              {linkItems.slice(2).map((item, index) => (
                <Link
                  href={item.link}
                  onClick={() => onClose()}
                  className="flex gap-3 items-center p-3 hover:bg-[#ffffff0c] rounded-lg transition capitalize"
                  key={index}
                >
                  <Image src={item.image} alt="Icon" width={20} height={20} />
                  <p className="capitalize">{item.title}</p>
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-1 w-full">
            <button
              onClick={() => {
                router.push("/auth/login");
                dispatch(setUser(null));
                localStorage.clear();
              }}
              className="flex gap-3 items-center p-3 hover:bg-primary-red/10 rounded-lg transition capitalize w-full hover:ring-1 hover:ring-primary-red"
            >
              <Image src="/main/logout.svg" alt="Icon" width={20} height={20} />
              <p className="capitalize text-[#FF0006] font-semibold">logout</p>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
