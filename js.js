// const arr=[1,2,3,4,5,6]
//  const [a,b,c,d]=arr
//  console.log(a,b,c,d);

// const arr=[1,2,3,4,5,6]
//  const [a,b,c,d]=arr;
// console.log(a,d);

//                                                  x

// destructuring
// const arr =[1,2,3,4,5]
// const[a,b,c]=arr
// console.log(a,b,c);

// leaving hole(ommit)
// const arr=[1,2,3,4,5]
// const[a,b,,,c]=arr
// console.log(a,b,c);

// swapping
// let a=50;
// let b=60;
//  [a,b]=[b,a]
//  console.log(a,b);

// const arr = [1,2,6,[10,20,30,[10,50]],100,200];
// const [, , ,,a,b] = arr;
// console.log(a,b);

// const obj={
//     name:"sonic",
//     age:28,
//     address:"abc"
// }
// const{age,name,address}=obj
// console.log(obj);

// printInfo:function({val2,val1}){
// console.log(val2,val1);}
// obj.printInfo({
//     val1:"surprise",
//     val2:"hello"
// })

// spread opr           07/04/22

//  array

// const arr = ['hel','lo','wor']
// console.log(arr);
// const arrcopy=[...arr]
// arrcopy.push('ld')
// console.log(arrcopy);

// obj
// const obj ={
//                 name:"hp",
//                 address:"b'lore"

//             }
// const objcopy ={...obj}
//             objcopy.age = 25
//             console.log(objcopy);

// joining array

// const arr =['a','b','c']
// const newArray = [1,2,3,...arr]
// console.log(newArray);
// console.log(...arr);
// console.log(...newArray);
// const jointArray = [...newArray,...arr]
// console.log(jointArray);

// function orderPizza(ing1,ing2,ing3){
//     console.log(`pizza with ${ing1},${ing2},${ing3} is ready to be served`);
// }
// const ings = ["oregano","capsicum","chicken sausage"]
// orderPizza(...ings)

//code NO 1

// const markHeight = 5.11;

// const markWeight = 50;

// const johnHeight = 4.7;

// const johnWeight = 60;

// const johnBmi = (johnWeight / johnHeight ** 2 ).toFixed(2)
// // console.log(johnBmi);
// const markBmi = (markWeight / markHeight ** 2
// ).toFixed(2)
// // console.log(markBmi);

// console.log(`mark BMI is "${markBmi}"`);
// console.log(`john BMI is "${johnBmi}"`);

// if(markBmi > johnBmi){
//     // console.log('Mark\'s BMI is bigger than John\'s');
//     console.log("mark BMI is bigger than john's");
//   }
//   else {
//     // console.log('John\'s BMI is bigger than Mark\'s');
//      console.log("john BMI is bigger than mark's");
//   }

//Data structurs coding challenge

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Reus",
      "Hazard",
      "Brandt",
      "Sancho",
      "Halland",
    ],
  ],
  score: "2:2",
  scored: ["Reus", "Gnarby", "Lewandowski", "Halland"],
  date: "Nov 9th, 2022",
  odds: {
    team1: 2.33,
    x: 1.67,
    team2: 2.5,
  },
};

console.log(game);

const [gk, ...fieldPlayers] = game.players[0];
console.log(gk);
console.log(fieldPlayers);

const gk2 = game.players[1][0];
console.log(gk2);

const allPlayers = [...game.players[0], ...game.players[1]];
// console.log(...game.players[0],...game.players[1]);
console.log("All players " + allPlayers);
console.log([game.players[0], game.players[1]]);

const players1Final = [...game.players[0], "Thiago", "Coutinho", "Perisic"];
console.log(players1Final);



// const players1Final=game.subTeam1 function add(...subTeam1){
//     console.log(subTeam1);
//     let sum = 11
//     subTeam1.forEach(fun(el){
//         sum+=el
//     })
//     console.log(sum);
// }

// const subTeam1 =['Thiago', 'Coutinho' and 'Perisic']
// add(...subTeam1)
