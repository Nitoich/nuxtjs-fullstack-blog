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
  },
  {
    method: "patch",
    path: "/user",
    callback: new TestController().updateUser
  }

];

export { Routes };
console.log(TestController.get)
