"use client";
import React from "react";
import Link from "next/link";
import { AiFillBug } from "react-icons/ai";
import { usePathname } from "next/navigation";
import { log } from "console";
const NavBar = () => {
  const currentpath = usePathname();
  console.log(currentpath);
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];
  return (
    <div>
      <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
        <Link href="/">
          <AiFillBug />
        </Link>
        <ul className="flex space-x-6">
          {links.map((link) => (
            <li>
              <Link
                className={`${
                  link.href === currentpath ? "text-zinc-900" : "text-zinc-500"
                } hover:text-zinc-800 transition-colors`}
                href={link.href}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
