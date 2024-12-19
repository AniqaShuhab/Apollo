"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";
import { Menu } from "../../types/menu";

const Header = () => {
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  const usePathName = usePathname();

  const renderSubmenu = (submenu: Menu[]) => {
    return (
      <ul className="absolute -left-[253px] top-full grid w-[800px] grid-cols-3 gap-2 rounded-lg bg-white p-3 shadow-lg dark:bg-dark">
        {submenu.map((menuItem) => (
          <li key={menuItem.id} className="group relative">
            {menuItem.submenu ? (
              <>
                <span className="flex cursor-default py-1.5 text-sm font-medium text-dark hover:text-primary dark:text-white">
                  {menuItem.title}
                </span>
                <ul className="ml-3">
                  {menuItem.submenu.map((subItem) => (
                    <li key={subItem.id}>
                      <Link
                        href={subItem.path || "#"}
                        className={`flex py-1 text-xs text-body-color hover:text-primary dark:text-dark-6 dark:hover:text-primary ${usePathName === subItem.path ? "text-primary" : ""
                          }`}
                      >
                        {subItem.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <Link
                href={menuItem.path || "#"}
                className={`flex py-1.5 text-sm text-body-color hover:text-primary dark:text-dark-6 dark:hover:text-primary ${usePathName === menuItem.path ? "text-primary" : ""
                  }`}
              >
                {menuItem.title}
              </Link>
            )}
          </li>
        ))}
      </ul>
    );
  };

  const MenuItem = ({ item }: { item: Menu }) => {
    const [isHover, setIsHover] = useState(false);

    return (
      <li
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        className="relative"
      >
        <a href={item.path} className="menu-item flex items-center gap-1">
          {item.title}
          {item.submenu && (
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          )}
        </a>

        {item.submenu && isHover && item.title === "Solution & Services" && (
          <div className="absolute left-0 top-full bg-white shadow-lg py-2 px-6 rounded-lg z-50">
            <ul className="flex flex-col min-w-[180px]">
              {item.submenu.map((subItem) => (
                <li key={subItem.id} className="mb-4 relative group">
                  <a
                    href={subItem.path || "#"}
                    className="font-medium text-sm text-gray-600 hover:text-primary block mb-2"
                  >
                    {subItem.title}
                  </a>

                  {/* Check for and render nested submenu */}
                  {subItem.submenu && (
                    <ul className="absolute left-full top-0 bg-white shadow-lg py-2 px-4 rounded-lg min-w-[180px] hidden group-hover:block">
                      {subItem.submenu.map((nestedItem) => (
                        <li key={nestedItem.id} className="mb-2">
                          <a
                            href={nestedItem.path}
                            className="text-sm text-gray-600 hover:text-primary block"
                          >
                            {nestedItem.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}


        {/* Regular dropdown for other menu items with submenu */}
        {item.submenu && isHover && item.title !== "Solution & Services" && (
          <ul className="absolute left-0 top-full bg-white shadow-lg py-2 min-w-[200px] rounded-lg">
            {item.submenu.map((subItem) => (
              <li key={subItem.id}>
                <a
                  href={subItem.path}
                  className="block px-4 py-2 text-sm text-gray-600 hover:text-primary hover:bg-gray-50"
                >
                  {subItem.title}
                </a>
              </li>
            ))}
          </ul>
        )}
      </li>
    );
  };

  return (
    <>
      <header
        className={`header left-0 top-0 z-40 flex w-full items-center ${sticky
            ? "dark:bg-gray-dark dark:shadow-sticky-dark fixed z-[9999] bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm transition"
            : "absolute bg-transparent"
          }`}
      >
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="w-60 max-w-full px-4 xl:mr-12">
              <Link
                href="/"
                className={`header-logo block w-full ${sticky ? "py-5 lg:py-2" : "py-8"
                  } `}
              >
                <Image
                  src="/images/logo/logo.png"
                  alt="logo"
                  width={140}
                  height={30}
                  className="w-full dark:hidden"
                />
                <Image
                  src="/images/logo/logo.png"
                  alt="logo"
                  width={140}
                  height={30}
                  className="hidden w-full dark:block"
                />
              </Link>
            </div>
            <div className="flex w-full items-center justify-between px-4">
              <div>
                <button
                  onClick={navbarToggleHandler}
                  id="navbarToggler"
                  aria-label="Mobile Menu"
                  className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
                >
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${navbarOpen ? " top-[7px] rotate-45" : " "
                      }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${navbarOpen ? "opacity-0 " : " "
                      }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${navbarOpen ? " top-[-8px] -rotate-45" : " "
                      }`}
                  />
                </button>
                <nav
                  id="navbarCollapse"
                  className={`navbar absolute right-0 z-30 w-[250px] rounded border-[.5px] border-body-color/50 bg-white px-6 py-4 duration-300 dark:border-body-color/20 dark:bg-dark lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${navbarOpen
                      ? "visibility top-full opacity-100"
                      : "invisible top-[120%] opacity-0"
                    }`}
                >
                  <ul className="block lg:flex lg:space-x-12">
                    {menuData.map((menuItem) => (
                      <MenuItem key={menuItem.id} item={menuItem} />
                    ))}
                  </ul>
                </nav>
              </div>
              <div className="flex items-center justify-end pr-16 lg:pr-0">
                <Link
                  href="/signin"
                  className="hidden px-7 py-3 text-base font-medium text-dark hover:opacity-70 dark:text-white md:block"
                >
                  Sign In
                </Link>
                <Link
                  href="/signup"
                  className="ease-in-up shadow-btn hover:shadow-btn-hover hidden rounded-sm bg-primary px-8 py-3 text-base font-medium text-white transition duration-300 hover:bg-opacity-90 md:block md:px-9 lg:px-6 xl:px-9"
                >
                  Sign Up
                </Link>
                <div>
                  <ThemeToggler />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
