export default class ViewModel {
  constructor() {
    this.fields = {}
  }

  getFields() {
    return this.fields
  }

  setFields(fields) {
    this.fields = Object.assign(this.fields, fields)
  }
}