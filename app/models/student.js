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
