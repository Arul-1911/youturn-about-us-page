import About_us from "@src/views/components/about_us_page/about_us";
import UserLayout from "@src/views/layouts/user_layout";
import Add_telecaller from "@src/views/pages/add_telecaller";

import Home from "@src/views/pages/home";

export const ROUTES = {
  HOME: "/home",
  ABOUT_US:'/about-us',
  TELE_CALLER:'/tele_caller'
};

const my_routes = [
  {
    path: "/",
    name: "Layout",
    authenticate: false,
    component: <UserLayout />,
    children: [
      {
        path: "",
        name: "Home",
        authenticate: false,
        component: <Home />,
      },
      {
        path: ROUTES.HOME,
        name: "Home",
        authenticate: false,
        component: <Home />,
      },
      {
        path: ROUTES.ABOUT_US,
        name: "about-us",
        authenticate: false,
        component: <About_us />,
      },
      {
        path: ROUTES.TELE_CALLER,
        name: "tele_caller",
        authenticate: false,
        component: <Add_telecaller />,
      },
    ],
  },
];

export default my_routes;
