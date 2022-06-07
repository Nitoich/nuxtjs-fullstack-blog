import TestController from "./controllers/TestController";

const Routes = [
  {
    method: "get",
    path: "/random",
    callback: new TestController().get
  }
];

export { Routes };
console.log(TestController.get)
