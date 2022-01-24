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
    <div className="w-1/5 text-center bg-slate-200 h-screen">
      <div className=" md:w-40 md:mx-auto md:py-9 mt-3">
        <NavLink to="/">
          <img
            src="https://raw.githubusercontent.com/PrishaPolicy/public-assets/main/prishapolicy-logo.png"
            alt="brand logo"
          />
        </NavLink>
      </div>
      {getSideBarItems(false).map((item, index) => {
        return (
          <div className="m-2 text-xl">
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
