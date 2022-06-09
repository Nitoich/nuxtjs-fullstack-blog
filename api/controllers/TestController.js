import User from "../models/User";

export default class TestController {
  async get(params) {
    let count = params.count ?? 3;
    let Data = {};
    for(let i = 0; i < count; i++) {
      Data[i] = [Math.random(), Math.random(), Math.random()];
    }

    return Data;
  };

  async getUsers(params) {
    if (params.id) {
      return await new User().where('login', 'like' ,`%${params.id}%`);
    } else {
      return await new User().all();
    }
  }
}
