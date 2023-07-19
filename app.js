const Character = require('./character.js')
const olegN = new Character ('Oleg','Magician')

console.log(olegN)
console.log(olegN.levelUp())
console.log(olegN.damage(10))

class Bowman extends Character {
    constructor(name,type,health,level) {
    super(name,type); // <- Messenger.call(this, name): вызов конструктора родителя
    this.type = 'Bowman';
    this.health = health
    this.level = level
    this.attack = 25
    this.defence = 25
    }
}
const Bond = new Bowman('Old','Bowman',50,1)
console.log (Bond)