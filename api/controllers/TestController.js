import User from "../models/User";

export default class TestController {
  async get(data) {
    let count = data.params.count ?? 3;
    let Data = {};
    for(let i = 0; i < count; i++) {
      Data[i] = [Math.random(), Math.random(), Math.random()];
    }

    return Data;
  };

  async getUsers(data) {
    console.log(data)
    if (data.params.id) {
      return await new User().where('id', '=' ,`${data.params.id}`);
    } else {
      return await new User().all();
    }
  }

  async updateUser(data) {
    let users = await new User().where('id', '=' ,data.params.id);
    console.log(users);
    let Data = new User().update(users[0], 'password', '123');
    return Data;
  }
}
