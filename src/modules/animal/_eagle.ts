import Animal from "./_animal"

class Eagle extends Animal {
  constructor(name: string, age: number) {
    super(name, age)
  }

  fly(): void {
    !this.isMammal 
      ? console.log(`${this.name} sedang terbang!`)
      : null
  }
}


export default Eagle