#! /usr/bin/env node
import { log } from "console";
import inquirer from "inquirer"
import chalk from "chalk"
import { pid } from "process";

class Player{
    name: string;
    fuel: number = 100;
    constructor(name:string){
        this.name = name
    }
    fuelDecrease(){
        let fuel = this.fuel - 25
        this.fuel = fuel
    }
    fuelIncease(){
        this.fuel = 100
    }
}
class Opponent{
    name: string;
    fuel: number = 100;
    constructor(name:string){
        this.name = name
    }
    fuelDecrease(){
        let fuel = this.fuel - 25
        this.fuel = fuel
    }
}
let player = await inquirer.prompt({
    type: "input",
    name: "name",
    message: "Please Enter Your Name"
})

let opponent = await inquirer.prompt({
    type: "list",
    name: "select",
    message: "Please Select Name",
    choices: ["zombie","thanos","devil"]
})

let p1 = new Player(player.name)
let o1 = new Opponent(opponent.select)
do{
    //zombie  
    if(opponent.select === "zombie"){
        
        let ask = await inquirer.prompt({
        type: "list",
        name: "action",
        message: "Please Select Action",
        choices: ["Attack","Drink portion","Run for your life"]
     })
     if(ask.action === "Attack"){
        let num = Math.floor(Math.random()*2)
        if(num > 0){
            p1.fuelDecrease()
            console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
            console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
            if(p1.fuel <= 0){
                console.log(chalk.bold.red("YOU LOOSE!!")); 
                process.exit()
            }
        }
        if(num <= 0){
            o1.fuelDecrease()
            console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
            console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
            if(o1.fuel <= 0){
                console.log(chalk.bold.green("YOU WIN")); 
                process.exit()
            }
        }    
     }
     if(ask.action === "Drink portion"){
        p1.fuelIncease()
        console.log(chalk.bold.yellow(`you drink health portion your fuel is ${p1.fuel}`));
        
     }
     if(ask.action === "Run for your life"){
        console.log(chalk.bold.gray("YOU LOOSE!!")); 
        process.exit()
     }
    }
   //thanos
    if(opponent.select === "thanos"){
        
        let ask = await inquirer.prompt({
        type: "list",
        name: "action",
        message: "Please Select Action",
        choices: ["Attack","Drink portion","Run for your life"]
     })
     if(ask.action === "Attack"){
        let num = Math.floor(Math.random()*2)
        if(num > 0){
            p1.fuelDecrease()
            console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
            console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
            if(p1.fuel <= 0){
                console.log(chalk.bold.red("YOU LOOSE!!")); 
                process.exit()
            }
        }
        if(num <= 0){
            o1.fuelDecrease()
            console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
            console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
            if(o1.fuel <= 0){
                console.log(chalk.bold.green("YOU WIN")); 
                process.exit()
            }
        }    
     }
     if(ask.action === "Drink portion"){
        p1.fuelIncease()
        console.log(chalk.bold.yellow(`you drink health portion your fuel is ${p1.fuel}`));
        
     }
     if(ask.action === "Run for your life"){
        console.log(chalk.bold.gray("YOU LOOSE!!")); 
        process.exit()
     }
    }
   //devil
    if(opponent.select === "devil"){
        
        let ask = await inquirer.prompt({
        type: "list",
        name: "action",
        message: "Please Select Action",
        choices: ["Attack","Drink portion","Run for your life"]
     })
     if(ask.action === "Attack"){
        let num = Math.floor(Math.random()*2)
        if(num > 0){
            p1.fuelDecrease()
            console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
            console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
            if(p1.fuel <= 0){
                console.log(chalk.bold.red("YOU LOOSE!!")); 
                process.exit()
            }
        }
        if(num <= 0){
            o1.fuelDecrease()
            console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
            console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
            if(o1.fuel <= 0){
                console.log(chalk.bold.green("YOU WIN")); 
                process.exit()
            }
        }    
     }
     if(ask.action === "Drink portion"){
        p1.fuelIncease()
        console.log(chalk.bold.yellow(`you drink health portion your fuel is ${p1.fuel}`));
        
     }
     if(ask.action === "Run for your life"){
        console.log(chalk.bold.gray("YOU LOOSE!!")); 
        process.exit()
     }
    }
}
while(true)
