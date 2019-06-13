// CODE here for your Lambda Classes
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
        console.log(`${this.name} receives a perfect score on ${subject}`)
    }
}

