"use client";
import React, { useEffect, useState } from "react";
import { Button } from "../../ui/button";
import { Sling as Hamburger } from "hamburger-react";
import navbarLinks from "@/constants/links";
import { Locale } from "@/i18n.config";
import i18n from "./i18n";
import { CenteredContainer } from "../../Container";
import Socials from "../../common/Socials";
import injectLocaleIfBlog from "@/utils/links";
import NavAvatar from "./NavAvatar";
import { usePathname } from 'next/navigation'
import { NavLink } from "@/components/common/NavLink";

type Props = {
  locale: Locale;
};

function Navbar({ locale }: Props) {
  const [isOpen, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-[60] m-auto py-4 transition-colors duration-500 ${isOpen
        ? "bg-background"
        : isScrolled
          ? "bg-background"
          : "bg-transparent"
        }`}
    >
      <CenteredContainer className="flex items-center">
        <NavLink href="/" className="flex items-center text-lg">
          <NavAvatar locale={locale}/>
        </NavLink>
        <Button
          variant="link"
          className="md:hidden ml-auto pr-0 hover:!pl-4 hover:!pr-4"
          onClick={() => setOpen(!isOpen)}
        >
          <Hamburger
            toggled={isOpen}
            color="white"
            toggle={setOpen}
            size={24}
          />
        </Button>
        <NavbarDesktopLinks locale={locale} />
        <NavbarMobileDrawer
          locale={locale}
          isOpen={isOpen}
          onClose={() => setOpen(false)}
        />
      </CenteredContainer>
    </nav>
  );
}

type NavbarMobileDrawerProps = {
  locale: Locale;
  isOpen: boolean;
  onClose: () => void;
};

function NavbarMobileDrawer({
  locale,
  isOpen,
  onClose,
}: NavbarMobileDrawerProps) {
  const t = i18n[locale];
  const pathname = usePathname()

  function isLinkActive(url: string, locale: Locale) {
    if (url === "/") {
      url = "";
    }
    return "/" + locale + url === pathname
  }

  return (
    <div
      className={`fixed z-50 w-full md:hidden top-[68px] min-h-[100vh] bg-background flex flex-col justify-between transition-all duration-500 py-24 pt-8 pb-32 px-4 md:p-8 ${isOpen ? "-left-0" : "left-full"
        }`}
      style={{ height: "calc(100% - 76px)" }}
    >
      <ul className="flex flex-col gap-2">
        {navbarLinks.map((link) => {
          return (
            <li key={link.key}>
              <Button
                className="w-full text-left justify-start hover:px-4"
                variant={isLinkActive(link.url, locale) ? "default" : "ghost"}
                size="lg"
                onClick={onClose}
                asChild
              >
                <NavLink href={injectLocaleIfBlog(link.url, locale)}>
                  {t[link.key as keyof typeof t]}
                </NavLink>
              </Button>
            </li>
          );
        })}
      </ul>
      <ul className="flex flex-col gap-2 ">
        <li>
          <Socials locale={locale} />
        </li>
        <li>
          <Button
            className="w-full mt-4 text-left justify-start hover:px-4"
            size="lg"
            asChild
            onClick={onClose}
          >
            <NavLink href="#contact" className="w-full">
              {t.contact}
            </NavLink>
          </Button>
        </li>
      </ul>
    </div>
  );
}

type NavbarDesktopLinksProps = {
  locale: Locale;
};

function NavbarDesktopLinks({ locale }: NavbarDesktopLinksProps) {
  const t = i18n[locale];
  const pathname = usePathname()

  function isLinkActive(url: string, locale: Locale) {
    if (url === "/") {
      url = "";
    }
    return "/" + locale + url === pathname
  }

  return (
    <div className="hidden md:block ml-8 w-full">
      <ul className="flex justify-between">
        <li>
          <ul className="flex gap-2">
            {navbarLinks.map((link) => (
              <li key={link.key}>
                <Button
                  variant={isLinkActive(link.url, locale) ? "default" : "ghost"}
                  asChild
                  className="hover:px-4"
                >
                  <NavLink href={injectLocaleIfBlog(link.url, locale)}>
                    {t[link.key as keyof typeof t]}
                  </NavLink>
                </Button>
              </li>
            ))}
          </ul>
        </li>
        <li>
          <ul className="flex items-center">
            <li className="hidden lg:block">
              <Socials locale={locale} />
            </li>
            <li>
              <Button className="ml-4" asChild>
                <NavLink href="#contact">{t.contact}</NavLink>
              </Button>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
