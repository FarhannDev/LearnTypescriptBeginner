interface CarInterface {
  brand: string,
  color: string,
  maxSpeed: number,
  chassisNumber?: number | string,
  drive(): void;
  reverse(): void;
  turn(direction: string): void;
}


class Car implements CarInterface {
  public brand: string
  public color: string
  public maxSpeed: number
  private readonly _chassisNumber?: string | number | undefined

  constructor(brand: string, color: string, maxSpeed: number) {
    this.brand = brand
    this.color = color
    this.maxSpeed = maxSpeed
    this._chassisNumber = this.#generateChassisNumber()
  }

  #generateChassisNumber() {
    return `${this.brand}-${Math.floor(Math.random() * 1000)}`;
  }

  get chassisNumber() {
    return this._chassisNumber;
  }

  set chassisNumber(chassisNumber) {
    console.log('you are not allowed to change the chassis number');
  }

  drive(): void {
    console.log(`${this.brand} ${this.color} is driving`);
  }

  reverse(): void {
    console.log(`${this.brand} ${this.color} is reversing`);
  }

  turn(direction: string): void {
    console.log(`${this.brand} ${this.color} is turning ${direction}`);
  }

}

// const car = new Car('BMW', 'red', 200)

// car.drive()
// car.turn('left')
// car.reverse()


export default Car