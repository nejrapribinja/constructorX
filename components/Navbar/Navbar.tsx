"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS, LOGO, BUTTON_TITLE } from "@/utils/content";
import dynamic from "next/dynamic";
const CustomButton = dynamic(() => import("../CustomButton"));
const MenuOverlay = dynamic(() => import("./MenuOverlay"));
const NavLinkList = dynamic(() => import("./NavLinkList"));
const MobileMenu = dynamic(() => import("./MobileMenu"));

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setNavbarOpen(window.innerWidth <= 1024 ? navbarOpen : false);
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [navbarOpen]);

  return (
    /* Navbar */
    <nav className="w-full bg-white">
      <div className="flex flex-wrap items-center justify-between md:p-8 py-8 px-4 xl:mx-[135.6px]">
        {/* Logo */}
        <Link href={"/"}>
          <Image
            priority
            src={LOGO}
            alt="logo"
            width={221}
            height={31}
            className="transform scale-100 hover:scale-95 transition-transform duration-[350ms]"
          />
        </Link>
        {/* Navlink List */}
        <NavLinkList />

        <div className="flex gap-5">
          <div className="menu hidden md:inline text-right" id="navbar">
            <CustomButton
              text={BUTTON_TITLE}
              className="transform scale-100 hover:scale-95 transition-transform duration-[350ms] bg-primary py-[18px] px-[30px] text-white"
            />
          </div>

          {/* Mobile menu */}
          <MobileMenu isOpen={navbarOpen} toggleMenu={() => setNavbarOpen(!navbarOpen)} />
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={NAV_LINKS} /> : null}
    </nav>
  );
};

export default Navbar;
