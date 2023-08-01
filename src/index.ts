import Car from './modules/buildCar/_car';

// Animals
import Eagle from './modules/animal/_eagle';
import Rabbit from './modules/animal/_rabbit';

// Watch Movie
import _withDrawMoney from './modules/watchMovie/_withDrawMoney';
import _buyCinemaTicket from './modules/watchMovie/_buyCinemaTicket';
import _goInsideCinema from './modules/watchMovie/_goInsideCinema';

// Mail Service
import WhatsAppService from './modules/mailService/_whatsAppService';
import EmailService from './modules/mailService/_emailService';

// DevPosition
import Developer from './modules/devPosition/_developer';
import { canBuildUI, canBuildAPI, canDeployApp } from "./modules/devPosition/_jobs"

import { books } from './modules/_Books';
import { students } from './modules/_Students';

import {buyTollRoadCard, topUpBalance, useTollRoad} from "./modules/_TollAccess"


// Instance / Object Class Mail Service
const email = new EmailService('dimas@dicoding.com')
const whatsapp = new WhatsAppService('+6282298717364')

email.saveAsDraft()
email.sendMessage('Hello', 'john@doe.com')
email.sendDelayedMessage('Hello', 'Johndoe@mail.com', 3000)

whatsapp.sendMessage('P', '+62 815-7258-2548')
whatsapp.sendBroadcastMessage('P', ['+62 815-7258-2548', '+62 815-7258-2222'])

// Instance / Object Class Car
const car = new Car('BMW', 'red', 200)
car.drive()
car.turn('left')
car.reverse()


// Instance / Object Class Animal
const rabbit: Rabbit = new Rabbit('Labi', 2)
const eagle: Eagle = new Eagle('Elo', 4)

rabbit.isMammal = true
rabbit.eat()

eagle.fly()

// Object composition class Developer
export const createFrontEndDeveloper = (name: string) => {
  const developer: Required<Developer> = new Developer(name)
  return Object.assign(developer , canBuildUI(developer))
}

export const createBackEndDeveloper = (name: string) => {
  const developer: Required<Developer> = new Developer(name)
  return Object.assign(developer, canBuildAPI(developer))
} 

export const createFullStackDeveloper = (name: string) => {
  const developer: Required<Developer> = new Developer(name)
  return Object.assign(developer,
    canBuildUI(developer),
    canBuildAPI(developer),
    canDeployApp(developer)
  )
}

const fe = createFrontEndDeveloper('Farhan')
const be = createBackEndDeveloper('Farhan')
const fd = createFullStackDeveloper('Farhan')

fd.buildUI()
fd.buildAPI()
fd.commitChanges()
fd.deployApp()
console.log(`is ${fd.name} developer? `, fd instanceof Developer);



const greatAuthors = books.filter((book) => book.sales >= 1000000)
  .map((book) => {
      return  `${book.author} adalah penulis buku ${book.title} yang sangat hebat!`
})


console.log({ greatAuthors })

const filteredStudentGetBeasiswa =
  students?.filter((student) => student.score >= 85).map((student) => {
    return `Mahasiswa ${student.name} total ujian: ${student.score} direkomendasikan mendapatkan beasiswa!`
  })
    

console.log(filteredStudentGetBeasiswa)

const totalScore = students.reduce((acc, student) => acc + student.score, 0)

console.log({ totalScore })



// Promise
const watchMovie = async (amount: number) => {
  try {
    const money = await _withDrawMoney(amount)
    const ticket = await _buyCinemaTicket(money)
    const result = await _goInsideCinema(ticket)

    return result

  } catch (error) {
    throw error;
  }
} 

watchMovie(10)
  .then((result) => console.log(result)) // enjoy the movie
  .catch((error) => console.log(error.message));


const getTollAccess = async (amount: number) => {
  try {
    const card = await buyTollRoadCard(amount)
    const topUpSaldoCard = await topUpBalance(card, amount)
    const result = await useTollRoad(topUpSaldoCard)
 
    return result
  } catch (error) {
    throw error;
  }
}

getTollAccess(100)
  .then((result) => console.log(result))
  .catch((error) => console.log(error.message))