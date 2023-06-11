import SideBarItem from "../../elements/SideBarItem";

import { MdDashboard, MdComment } from "react-icons/md";
import { BiDollar } from "react-icons/bi";
import { BsImages } from "react-icons/bs";
import { HiUsers } from "react-icons/hi";

import "../../assets/styles/containers/sidebar.scss";

const menuButtons = [
  {
    icon: <MdDashboard />,
    text: "Dashboard",
  },
  {
    icon: <BiDollar />,
    text: "Sales",
  },
  {
    icon: <BsImages />,
    text: "Catalog",
  },
  {
    icon: <HiUsers />,
    text: "Customers",
  },
  {
    icon: <MdComment />,
    text: "Reviews",
  },
];

function SideBar() {
  return (
    <aside className="galore-sidebar">
      {menuButtons.map((item, index) => {
        return (
          <SideBarItem
            key={`galore-sidebar-${index}`}
            icon={item.icon}
            text={item.text}
          />
        );
      })}
    </aside>
  );
}

export default SideBar;
