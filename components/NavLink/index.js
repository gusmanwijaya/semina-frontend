import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const NavLink = ({ href, children }) => {
  const router = useRouter();

  return (
    <Link href={href}>
      <a
        className={`nav-link ${router.pathname === href ? "active" : ""}`}
        aria-current="page"
      >
        {children}
      </a>
    </Link>
  );
};

export default NavLink;
