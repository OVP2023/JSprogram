class Character {
    constructor(name,type) {
        this.name = name
        this.type = type
        this.health = 100
        this.level = 1
        if (this.name.length < 2 || this.name.length > 10 || this.name.length == undefined) {
            throw new Error("Неправильное поле name  " + this.name)
        }       
        if (this.type == 'Bowman') {
            this.attack = 25 
            this.defence = 25
        }
        else if (this.type == 'Swordsman'){
            this.attack = 40 
            this.defence = 10
        }
        else if (this.type == 'Magician'){
            this.attack = 10 
            this.defence = 40        
        }
        else if (this.type == 'Daemon'){
            this.attack = 10 
            this.defence = 40         
        }
        else if (this.type == 'Undead'){
            this.attack = 25 
            this.defence = 25        
        }
        else if (this.type == 'Zombie'){
            this.attack = 40 
            this.defence = 10      
        }
        else{
            throw new Error("Неправильное поле type  " + this.type)
        }
    }
    levelUp(){
        if (this.health > 0){
            this.level = this.level + 1
            this.attack = this.attack*1.2
            this.defence = this.defence*1.2
            this.health = 100
            console.log(this.level, this.attack, this.defence)
        }else{
            throw new Error("Нельзя повысить уровень погибшего " + this.name)
        }    
        return this.health;
    }
    damage(points){
        if (this.health > 0){
            this.health = this.health - points * (1 - this.defence / 100)
            if (this.health < 0){
                this.health = 0
            }
        }
        else {
            this.health = 0
        }
        return this.health
    }
}

module.exports = Character