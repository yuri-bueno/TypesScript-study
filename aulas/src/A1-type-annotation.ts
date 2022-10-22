/* eslint-disable */

// só precisa colocar tipo se for any
let nome:string='arroz'
let idade:number=20
let adulto:boolean=true

let arraysNumber: number[]=[4,2,3,5]
let arraysString: string[]=['a','2','3423']


let pessoa:{nome:string,idade:number,adulto?:boolean} ={
  idade:30,
  nome:'yuri'
}


function soma(x:number,y:number):number {
return x+y
}

const soma2:(x:number,y:number)=>number =(x,y)=>{
  return x+y
}
