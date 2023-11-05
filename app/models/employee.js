export class employee extends Person {
  constructor(name, address, code, email, workDays, dailyWage) {
    super(name, address, code, email);
    this.workDays = workDays;
    this.dailyWage = dailyWage;
  }
  calSalary() {
    return this.workDays * this.dailyWage;
  }
}
