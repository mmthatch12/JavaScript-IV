// CODE here for your Lambda Classes
//Person class
class Person {
    constructor(attribs) {
        this.name = attribs.name;
        this.age = attribs.age;
        this.location = attribs.location;
    }
    speak() {
        console.log(`Hello my name is ${this.name} I am from ${this.location}`)
    }
}

// Instructor class
class Instructor extends Person {
    constructor(inattribs) {
        super(inattribs)
        this.specialty = inattribs.specialty;
        this.favLanguage = inattribs.favLanguage;
        this.catchPhrase = inattribs.catchPhrase;
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}`)
    } 
    grade(student, subject) {
        console.log(`${student} receives a perfect score on ${subject}`)
    }
}

// Student class
class Student extends Person {
    constructor(stattribs) {
        super(stattribs)
        this.previousBackground = stattribs.previousBackground;
        this.className = stattribs.className;
        this.favSubjects = stattribs.favSubjects;
    }
    listsSubjects() {
        console.log(`${this.favSubjects}`)
    }
    PRAssignment(student, subject) {
        `${student} has submitted a PR for ${subject}`
    }
    sprintChallenge(student, subject) {
        `${student} has begun sprint challenge on ${subject}`
    }
}

//ProjectManagers class
class ProjectManagers extends Instructor {
    constructor(pmattribs) {
        super(pmattribs)
        this.gradClassName = pmattribs.gradClassName;
        this.favInstructor = pmattribs.favInstructor;
    }
    standUp(channel) {
        `${this.name} announces to ${channel} @channel standy times!`
    }
    debugsCode(student, subject) {
        `${this.name} debugs ${student}'s code on ${subject}`
    }
}

//Person objects
const federer = new Person({
    name: 'Federer',
    age: 37,
    location: 'Switzerland'
}) 

const nadal = new Person({
    name: 'Nadal',
    age: 33,
    location: 'Spain'
}) 

const djokovic = new Person({
    name: 'Djokovic',
    age: 32,
    location: 'Serbia'
}) 

//Instructor Objects
const yoda = new Instructor({
    name: 'Yoda',
    age: 900,
    location: 'Dagobah',
    specialty: 'force lifts',
    favLanguage: 'bad english',
    catchPhrase: 'Do or do not',
}) 

const quigon = new Instructor({
    name: 'Qui-gon',
    age: 54,
    location: 'Courisant',
    specialty: 'Talent searching',
    favLanguage: 'high english',
    catchPhrase: 'He is the chosen one',
}) 

const obi = new Instructor({
    name: 'Obiwan',
    age: 32,
    location: 'Tatooine',
    specialty: 'lightsaber',
    favLanguage: 'high english',
    catchPhrase: 'You were the chosen one',
}) 

//Student objects
const anakin = new Student({
    name: 'Anakin',
    age: 8,
    location: 'Tatooine',
    previousBackground: 'podracer',
    className: 'web-77',
    favSubjects: ['padme', 'sand', 'lightsabers']
}) 

//person objects testing
console.log(federer.name)
console.log(nadal.speak())
console.log(djokovic.speak())

//Instructor Objects testing
console.log(yoda.grade('Matt Thatcher', 'the force'))
console.log(quigon)
console.log(obi)