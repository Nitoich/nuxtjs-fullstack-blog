import TestController from "./controllers/TestController";

const Routes = [
  {
    method: "get",
    path: "/random",
    callback: new TestController().get
  },
  {
    method: "get",
    path: "/user",
    callback: new TestController().getUsers
  }
];

export { Routes };
console.log(TestController.get)
