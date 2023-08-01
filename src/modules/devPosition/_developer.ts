export interface DeveloperInterface {
  name: string;
  commitChanges(): void;
}

class Developer implements DeveloperInterface {
  public name: string;

  constructor(name: string) { this.name = name }

  commitChanges(): void {
    console.log(`${this.name} is committing changes...`);    
  }
}


export default Developer