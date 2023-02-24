export default class Validator {
  validateUsername(name) {
    this.name = name;
    if (!/\d{4,}/.test(name) === true) {
      return /^[a-z]+[\w-]*[a-z]+$/.test(name);
    }
    return false;
  }
}
