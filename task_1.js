/* Родительский класс*/
class AClass {
  Numbers = [];

  constructor(n) {
    this.n = n;
    this.fill();
  }
  /* Метод заполнения случайными числами */
  fill = () => {
    for (let i = 0; i < this.n; i++) {
      this.Numbers.push(Math.round(1 - 0.5 + Math.random() * (10 - 1 + 1)));
    }
  };
  /* Вычисление факториала */
  factorial = () => {
    const factorialArray = [];
    const getFactorial = (n) => (n == 0 ? 1 : n * getFactorial(n-1));
    for (let i = 0; i < this.Numbers.length; i++) {
      factorialArray[i] = getFactorial(this.Numbers[i]);
    }
    return factorialArray;
  };

  sort = () => {};
}
/* Первый дочерний класс */
class Class1 extends AClass {
  constructor(n) {
    super(n);
  }
  sort = () => {
    this.Numbers.sort((a, b) => a / b);
    return this.factorial();
  };
}
/* Второй дочерний класс */
class Class2 extends AClass {
  constructor(n) {
    super(n);
  }
  sort = () => {
    this.Numbers.sort((a, b) => b * a);
    return this.factorial();
  };
}

const class1 = new Class1(10);
const class2 = new Class2(5);

console.log(class1.sort());
console.log(class2.sort());
