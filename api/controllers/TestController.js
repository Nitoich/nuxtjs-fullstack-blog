export default class TestController {
  async get(params) {
    let count = params.count ?? 3;
    let Data = {};
    for(let i = 0; i < count; i++) {
      Data[i] = [Math.random(), Math.random(), Math.random()];
    }

    return Data;
  };
}
