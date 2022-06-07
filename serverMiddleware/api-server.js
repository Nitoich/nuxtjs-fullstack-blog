import { Routes, startCallback } from "../api/routes";

function findRoute(neededRouteArray, method) {
  return Routes.find(route => {
    let RoutePath = (route.path[0] == '/') ? "api" + route.path : "api/" + route.path;
    if(neededRouteArray == RoutePath && route.method.toLowerCase() == method.toLowerCase()) {
      return route;
    }
  });
}

export default async (req, res, next) => {
  let url = req._parsedUrl.pathname.replace(/^\/+|\/+$|\.+/g, '');
  url = url.split('/');
  console.log(findRoute(url.join('/'), req.method));
  let findedRoute = findRoute(url.join('/'), req.method);
  if (findedRoute) {
    let result = await findedRoute.callback(req.params);
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(result));
  } else {
    res.statusCode = 404;
    res.end();
  }
  // let method = url.pop();
  // let controller = url.slice(1).join("/");
  // let api = require("../api/" + controller);
  // console.log(api[method]);
  // let result = await api[method](req.params);
};
