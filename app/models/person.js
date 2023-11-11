export class Person {
  constructor(name, address, code, email) {
    this.name = name;
    this.address = address;
    this.code = code;
    this.email = email;
  }
}
export class Student extends Person {
  constructor(name, address, code, email, math, physic, chemistry) {
    super(name, address, code, email);
    this.math = math;
    this.physic = physic;
    this.chemistry = chemistry;
  }
  calAverage() {
    return (this.math + this.physic + this.chemistry) / 3;
  }
}

export class Employee extends Person {
  constructor(name, address, code, email, workDays, dailyWage) {
    super(name, address, code, email);
    this.workDays = workDays;
    this.dailyWage = dailyWage;
  }
  calSalary() {
    return this.workDays * this.dailyWage;
  }
}
export class Customer extends Person {
  constructor(name, address, code, email, companyName, value, rating) {
    super(name, address, code, email);
    this.companyName = companyName;
    this.value = value;
    this.rating = rating;
  }
}
