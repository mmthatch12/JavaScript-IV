
/*
Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.
*/


class GameObject {
    constructor(attributes) {
        this.createdAt = attributes.createdAt;
        this.name = attributes.name;
        this.dimensions = attributes.dimensions;
    }
    destroy () {
        return `${this.name} was removed from the game.`
    };
}
  
  
  /*
    === CharacterStats ===
    * healthPoints
    * takeDamage() // prototype method -> returns the string '<object name> took damage.'
    * should inherit destroy() from GameObject's prototype
  */
  
class CharacterStats extends GameObject {
    constructor(attributes) {
        super(attributes)
        this.healthPoints = attributes.healthPoints;
    }
    takeDamage() {
        return `${this.name} took damage.`
    };
}  
  
  /*
    === Humanoid (Having an appearance or character resembling that of a human.) ===
    * team
    * weapons
    * language
    * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
    * should inherit destroy() from GameObject through CharacterStats
    * should inherit takeDamage() from CharacterStats
  */
  
class Humanoid extends CharacterStats {
    constructor(attributes) {
        super(attributes)
        this.team = attributes.team;
        this.weapons = attributes.weapons;
        this.language = attributes.language;
    }
    greet() {
        return `${this.name} offers a greeting in ${this.language}.`
    };
}
   
  
  
  
  
  
  
  // Stetch task #1 villan and hero constructor functions
  
class Badguy extends Humanoid {
constructor(attributes) {
    super(attributes)
    this.evilPower = attributes.evilPower;
}

evilPowerBlast(hitPoints) {
    let hit = this.healthPoints - hitPoints;
    if (this.healthPoints <= 0) {
    return `${this.name} is blasted and now only has ${hit} health`
    } else {
    return `${this.name} is blasted and now has ${hit} health. ${this.name} has been destroyed!`
    }
}
}
  
class Goodguy extends Humanoid {
    constructor(attributes) {
        super(attributes)
        this.heroPower = attributes.heroPower;
    }

    heroPowerBlast(hitPoints) {
        let hit = this.healthPoints - hitPoints;
        if (hit <= 0) {
        return `${this.name} is blasted and now only has ${hit} health`
        } else {
        return `${this.name} is blasted and now has ${hit} health. ${this.name} has been destroyed!`
        }
    }
}
  
  
  /*
    * Inheritance chain: GameObject -> CharacterStats -> Humanoid
    * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
    * Instances of CharacterStats should have all of the same properties as GameObject.
  */
  
  // Test you work by un-commenting these 3 objects and the list of console logs below:
  
  
    const mage = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 1,
        height: 1,
      },
      healthPoints: 5,
      name: 'Bruce',
      team: 'Mage Guild',
      weapons: [
        'Staff of Shamalama',
      ],
      language: 'Common Tongue',
    });
  
    const swordsman = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 2,
        height: 2,
      },
      healthPoints: 15,
      name: 'Sir Mustachio',
      team: 'The Round Table',
      weapons: [
        'Giant Sword',
        'Shield',
      ],
      language: 'Common Tongue',
    });
  
    const archer = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 1,
        width: 2,
        height: 4,
      },
      healthPoints: 10,
      name: 'Lilith',
      team: 'Forest Kingdom',
      weapons: [
        'Bow',
        'Dagger',
      ],
      language: 'Elvish',
    });
  
    //stretch goal #3 create hero and villan object
  
    const villain = new Badguy({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 1,
        height: 10,
      },
      healthPoints: 30,
      name: 'Voidicus',
      team: 'La Cabra',
      weapons: [
        'Hatred',
        'Spear of Self',
      ],
      language: 'Esperanto',
      evilPower: 'Turn tacos into anchovies',
    });
  
    const hero = new Goodguy({
      createdAt: new Date(),
      dimensions: {
        length: 1,
        width: 3,
        height: 2,
      },
      healthPoints: 50,
      name: 'Awesomeicus',
      team: 'Fedettes',
      weapons: [
        'Virtue',
        'Eye of Praying Mantis',
      ],
      language: 'Ingles',
      heroPower: 'Turn cake into Pizza',
    });
  
  
    console.log('log1:', mage.createdAt); // Today's date
    console.log('log2:', archer.dimensions); // { length: 1, width: 2, height: 4 }
    console.log('log3:', swordsman.healthPoints); // 15
    console.log('log4:', mage.name); // Bruce
    console.log('log5:', swordsman.team); // The Round Table
    console.log('log6:', mage.weapons); // Staff of Shamalama
    console.log('log7:', archer.language); // Elvish
    console.log('log8:', archer.greet()); // Lilith offers a greeting in Elvish.
    console.log('log9:', mage.takeDamage()); // Bruce took damage.
    console.log('log10:', swordsman.destroy()); // Sir Mustachio was removed from the game.
    console.log('log11:', villain)
    console.log('log12:', hero)
    console.log('log13:', villain.evilPowerBlast(31))
  
    // Stretch task: 
    // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
    // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
    // * Create two new objects, one a villain and one a hero and fight it out with methods!