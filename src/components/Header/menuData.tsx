import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  // {
  //   id: 1,
  //   title: "Home",
  //   path: "/",
  //   newTab: false,
  // },

  {
    id: 2,
    title: "Solution & Services",
    newTab: false,
    submenu: [
      {
        id: 21,
        title: "Business Solutions",
        path: "/business-solutions",
        newTab: false,
        submenu: [
          {
            id: 211, title: "Customer Experience Management",
            path: "/business-solutions/customer-experience-management",
            newTab: false
          },
          { id: 212, title: "Business Intelligence & Analytics", path: "/business-solutions/business-intelligence-analytics", newTab: false },
          { id: 213, title: "Data Integration", path: "/business-solutions/data-integration", newTab: false },
          { id: 214, title: "Data Modeling", path: "/business-solutions/data-modeling", newTab: false },
          { id: 215, title: "Big Data Solutions", path: "/business-solutions/big-data-solutions", newTab: false },
          { id: 216, title: "Artificial Intelligence/ Machine", path: "/business-solutions/artificial-intelligence-machine", newTab: false },
          { id: 217, title: "Data Warehouse", path: "/business-solutions/data-warehouse", newTab: false },
          { id: 218, title: "Information Management Solution", path: "/business-solutions/information-management-solution", newTab: false },
          { id: 219, title: "Cloud Solutions", path: "/business-solutions/cloud-solutions", newTab: false },
          { id: 210, title: "IoT Solutions", path: "/business-solutions/iot-solutions", newTab: false },
        ],
      },
      {
        id: 22,
        title: "Voice & Data Network",
        path: "/voice-data-network",
        newTab: false,
        submenu: [
          { id: 221, title: "Unified Communication", path: "/voice-data-network/unified-communication", newTab: false },
          { id: 222, title: "Data Center Solutions", path: "/voice-data-network/data-center-solutions", newTab: false },
          { id: 223, title: "Contact Center Solutions", path: "/voice-data-network/contact-center-solutions", newTab: false },
          { id: 224, title: "Wireless Network Solutions", path: "/voice-data-network/wireless-network-solutions", newTab: false },
          { id: 224, title: "Data Security Solutions", path: "/voice-data-network/data-security-solutions", newTab: false },
          { id: 225, title: "IP Cameras and CCTVs", path: "/voice-data-network/ip-cameras-cctv", newTab: false },
          { id: 226, title: "Routing & Switching", path: "/voice-data-network/routing-switching", newTab: false },
        ],
      },
      {
        id: 23,
        title: "Cyber Security Services",
        path: "/cyber-security",
        newTab: false,
        submenu: [
          { id: 231, title: "Technical Security Assessment", path: "/cyber-security/technical-security-assessment", newTab: false },
          { id: 232, title: "Digital Forensics Analysis", path: "/cyber-security/digital-forensics-analysis", newTab: false },
          { id: 233, title: "IT Security Solution Deployment", path: "/cyber-security/it-security-solution-deployment", newTab: false },
          { id: 234, title: "IT Security Auditing & Compliance", path: "/cyber-security/it-security-auditing-compliance", newTab: false },
          { id: 235, title: "Cyber Security Trainings", path: "/cyber-security/cyber-security-trainings", newTab: false },
          { id: 236, title: "Managed Security Services", path: "/cyber-security/managed-security-services", newTab: false },
        ],
      },
      {
        id: 24,
        title: "Enterprise Telephony Billing",
        path: "/enterprise-telephony",
        newTab: false,
      },
    ],
  },


  {
    id: 3,
    title: "Products",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "Resolve (Complaint Management)",
        path: "/software-products",
        newTab: false,
      },
      {
        id: 32,
        title: "Loyality Management System",
        path: "/loyality-management",
        newTab: false,
      },
      {
        id: 33,
        title: "Office Automation Suite",
        path: "/office-automation",
        newTab: false,
      },
      {
        id: 34,
        title: "Enterprise Telephony Billing",
        path: "/enterprise-telephony",
        newTab: false,
      },
      {
        id: 35,
        title: "Business & Operations Support",
        path: "/business-operations",
        newTab: false,
      },
      {
        id: 36,
        title: "Softphone",
        path: "/softphone",
        newTab: false,
      },
      {
        id: 37,
        title: "Wallboard",
        path: "/wallboard",
        newTab: false,
      },
      {
        id: 38,
        title: "Advanced Reporting",
        path: "/advanced-reporting",
        newTab: false,
      },
      {
        id: 39,
        title: "CEM (HashCube)",
        path: "/cem",
        newTab: false,
      },
    ],
  },
  {
    id: 4,
    title: "Partners",
    path: "/partners",
    newTab: false,
  },
  {
    id: 5,
    title: "Clients",
    path: "/clients",
    newTab: false,
  },
  // {
  //   id: 6,
  //   title: "Careers",
  //   path: "/careers",
  //   newTab: false,
  // },
  {
    id: 7,
    title: "About",
    path: "/about",
    newTab: false,
  },
];

export default menuData;
