import Animal from "./_animal"

class Rabbit extends Animal {
  constructor(name: string, age: number) {
    super(name, age)
  }

  eat(): void {
    this.isMammal
      ? console.log(`${this.name} sedang makan!`)
      : null
  }
}

export default Rabbit