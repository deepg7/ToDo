import { NavLink } from "react-router-dom";

const getSideBarItems = (isPremium: boolean) => {
  return [
    {
      name: "Dashboard",
      path: "/",
    },
    {
      name: "Tasks",
      path: "/tasks",
    },
    {
      name: "Profile",
      path: "/profile",
    },
    ...(isPremium
      ? [
          {
            path: "teams",
            name: "Teams",
          },
        ]
      : []),
  ];
};

const Sidebar = () => {
  return (
    <div className="w-1/4 text-center">
      {getSideBarItems(false).map((item, index) => {
        return (
          <div>
            <NavLink key={index} className="text-center" to={item.path}>
              {item.name}
            </NavLink>
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
