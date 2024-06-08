import React, { Suspense, memo, useRef } from "react";
import { BrowserRouter, useRoutes } from "react-router-dom";

import Loading from "@src/views/pages/loading";
import MyRoute from "@src/route/my_route";
import RouteScrollToTop from "@src/route/route_scroll_to_top";
import my_routes from "@src/route/my_routes";
import NotFound from "@src/views/components/auth/not_found";
import NotAllowed from "@src/views/components/auth/not_allowed";

export const Router = memo(() => {
  const get_route = (route) => {
    let _route = {};
    if (route.children) {
      let children = [];
      route.children?.forEach((child) => {
        let child_route = get_route(child);
        children.push(child_route);
      });
      _route = {
        path: route.path,
        element: (
          <MyRoute name={route.name} authenticate={route.authenticate}>
            {route.component}
          </MyRoute>
        ),
        children: children,
      };
    } else {
      _route = {
        path: route.path,
        element: (
          <MyRoute name={route.name} authenticate={route.authenticate}>
            {route.component}
          </MyRoute>
        ),
      };
    }
    return _route;
  };

  const MyRouter = () => {
    let routes = [];
    my_routes?.forEach((my_route) => {
      let child_route = get_route(my_route);
      routes.push(child_route);
    });

    let not_found_route = {
      path: "*",
      element: <NotFound />,
    };

    let not_allowed_route = {
      path: "not-allowed",
      element: <NotAllowed />,
    };
    routes.push(not_found_route);
    routes.push(not_allowed_route);
    let route_elements = useRoutes(routes);

    return <div>{route_elements}</div>;
  };

  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <RouteScrollToTop />
        <MyRouter />
      </Suspense>
    </BrowserRouter>
  );
});
