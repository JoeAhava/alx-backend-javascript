export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== typeof '') {
      throw new Error('Name must be string');
    }
    if (typeof length !== typeof Number(0)) {
      throw new Error('Length must be a number');
    }
    if (typeof students !== typeof []) {
      throw new Error('Students must be a list');
    }
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  set name(value) {
    if (typeof value !== typeof '') {
      throw new Error('Name must be string');
    }

    this._name = value;
  }

  set length(value) {
    if (typeof value !== typeof Number(0)) {
      throw new Error('Length must be a number');
    }
    this._length = value;
  }

  set students(value) {
    if (typeof value !== typeof []) {
      throw new Error('Students must be a list');
    }
    this._students = value;
  }
}
