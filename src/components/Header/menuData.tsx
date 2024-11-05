import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 33,
    title: "Blog",
    path: "/blog",
    newTab: false,
  },
  {
    id: 3,
    title: "Support",
    path: "/contact",
    newTab: false,
  },
  {
    id: 4,
    title: "Services",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Web Development",
        path: "/about",
        newTab: false,
      },
      {
        id: 42,
        title: "Mob App Development",
        path: "/contact",
        newTab: false,
      },
      {
        id: 43,
        title: "Generative AI",
        path: "/blog",
        newTab: false,
      },
      {
        id: 44,
        title: "DevOps",
        path: "/blog-sidebar",
        newTab: false,
      },
      {
        id: 45,
        title: "Custom Software Development",
        path: "/blog-details",
        newTab: false,
      },
      {
        id: 46,
        title: "Microsoft 365",
        path: "/signin",
        newTab: false,
      },
      {
        id: 47,
        title: "Cybersecurity",
        path: "/signup",
        newTab: false,
      },
      {
        id: 48,
        title: "Clude Migration & Managment",
        path: "/error",
        newTab: false,
      },
    ],
  },
];
export default menuData;
