"use client";
import React from "react";
import Link from "next/link";
import { AiFillBug } from "react-icons/ai";
import { usePathname } from "next/navigation";
import classnames from "classnames";
const links = [
  { label: "Dashboard", href: "/" },
  { label: "Issues", href: "/issues" },
];
const NavBar = () => {
  const currentpath = usePathname();

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
                key={link.href}
                className={classnames({
                  "text-zinc-900": link.href === currentpath,
                  "text-zinc-500": link.href !== currentpath,
                  "hover:text-zinc-800 transition-colors": true,
                })}
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
