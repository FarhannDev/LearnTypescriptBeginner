// Kuis Coding: Object-Oriented Programming
interface AnimalInterface {
  name: string,
  age: number,
  isMammal?: boolean
}

class Animal implements AnimalInterface {
  public name: string;
  public readonly age: number;
  public _isMammal?: boolean | undefined;

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
    this._isMammal = false
  }

  get isMammal()  {
    return this._isMammal
  }

  set isMammal (isMammal: boolean | undefined) {
    this._isMammal = isMammal
  }
}

export default Animal
