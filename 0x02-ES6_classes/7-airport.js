export default class AirPort {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  toString() {
    return this._code;
  }
}
