for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    debugger;
  }

function writeCards(names, event){
  let thankYouArray =[]
  for (let i = 0; i < names.length; i++) {
    console.log(`Write ${names[i]} and event added a Thank you!`);
  
  }
return ["Thank you, Guadalupe, for the wonderful surprise gift!",
"Thank you, Ollie, for the wonderful surprise gift!",
"Thank you, Aki, for the wonderful surprise gift!",]

}

writeCards(Cards);
function countDown(number){
while (number >=0) {
  console.log(number--)
}
}