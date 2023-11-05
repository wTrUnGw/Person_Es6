export class Customer extends Person {
  constructor(name, address, code, email, companyName, value, rating) {
    super(name, address, code, email);
    this.companyName = companyName;
    this.value = value;
    this.rating = rating;
  }
}
