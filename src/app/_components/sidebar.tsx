"use client";
import Image from "next/image";
import React from "react";
import appLogo from "assets/images/Final Logo 1.png";
import Link from "next/link";
import { MdSpaceDashboard } from "react-icons/md";
import { RiHistoryLine } from "react-icons/ri";
import { RiLogoutBoxFill } from "react-icons/ri";
import { signOut } from "next-auth/react";
import { usePathname } from "next/navigation";
import { logoutAction } from "@/lib/apis/auth.api";

interface SidebarProps {
  role: "admin" | "user";
}

const roles = {
  user: [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <MdSpaceDashboard className="text-2xl text-main group-hover:text-white group-active:text-white" />,
    },
    {
      name: "Quiz History",
      path: "/dashboard/quizes-history",
      icon: <RiHistoryLine className="text-2xl text-main group-hover:text-white" />,
    },
    {
      name: "Logout",
      path: "/logout",
      icon: <RiLogoutBoxFill className="text-2xl text-main group-hover:text-white" />,
    },
  ],
  admin: [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <MdSpaceDashboard className="text-2xl text-main group-hover:text-white" />,
    },
    {
      name: "Logout",
      path: "/logout",
      icon: <RiLogoutBoxFill className="text-2xl text-main group-hover:text-white" />,
    },
  ],
};

const Sidebar: React.FC<SidebarProps> = ({ role }) => {
  const links = roles[role] || [];

  const pathname = usePathname();

  const handleLogout = (e: React.MouseEvent) => {
    e.preventDefault();

    // Logout endpoint
    logoutAction();

    // remove user data from the session
    signOut({ callbackUrl: "/signin" });
  };

  return (
    <aside className="w-2/12 p-5 ">
      {/* App Logo */}
      <div className="mb-6">
        <Image src={appLogo} alt="Application Logo" width={150} height={50} />
      </div>

      {/* Navigation Links */}
      <nav>
        <ul className="space-y-2">
          {links.map((link) => (
            <li key={link.path} className={`group ${pathname === link.path ? "bg-main" : ""} rounded-lg transition-colors duration-500`}>
              {link.path === "/logout" ? (
                <a href="#" onClick={handleLogout} className="flex items-center p-2">
                  <span className={`mr-2 transition-colors duration-500 ${pathname === link.path ? "text-white" : "text-textColor"}`}>
                    {link.icon}
                  </span>
                  <span className={`transition-colors duration-500 ${pathname === link.path ? "text-white" : "text-textColor"}`}>
                    {link.name}
                  </span>
                </a>
              ) : (
                <Link href={link.path} className="flex items-center p-2">
                  <span className={`mr-2 transition-colors duration-500 ${pathname === link.path ? "text-white" : "text-textColor"}`}>
                    {link.icon}
                  </span>
                  <span className={`transition-colors duration-500 ${pathname === link.path ? "text-white" : "text-textColor"}`}>
                    {link.name}
                  </span>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
