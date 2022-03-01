function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//task 1
function task1(){
    const diceValue1 = rand(1, 6);
    const diceValue2 = rand(1, 6);
    const rolls = `Pirmas kauliukas - ${diceValue1}, antras kauliukas ${diceValue2}`;
    return (diceValue1 + diceValue2 > 8) ? console.log(`%cLaimėjote! :)  ${rolls}`, "color:green") :
     console.log(`%cPralaimėjote. :( ${rolls}}`, "color:red");
}
for(let i=0; i<10; i++){
    task1();
}


//task2
class cat {
    constructor(name) {
      this.name = name;
      this.weight = rand(3, 6);
    }
  }
function task2(){
    const cat1 = new cat("Pilkis");
    const cat2 = new cat("Murklys");
    const catsNamesAndWheight = `${cat1.name} sveria ${cat1.weight} kg, ${cat2.name} sveria ${cat2.weight} kg`
    return (cat1.weight < cat2.weight) ? console.log(`${catsNamesAndWheight}, lengvesnis katinukas yra ${cat1.name}`) :
    (cat1.weight > cat2.weight) ? console.log(`${catsNamesAndWheight}, lengvesnis katinukas yra ${cat2.name}`) :
    console.log(`${catsNamesAndWheight}, katinukų svoriai vienodi`);
}
for(let i=0; i<10; i++){
   task2(); 
}

//task3
function task3(){
    const cows = rand(0, 30);
    const cats = rand(0, 30);
    const comes = `Atėjūsių katinų skaičius ${cats}, atėjūsių karvių skaičius ${cows}.`;
    return (cows > 15 || cats > 15) ? console.log(`%cNetelpa. ${comes}`, "color:red") : console.log(`%cTelpa. ${comes}`, "color:green");
}
for(let i=0; i<10; i++){
    task3(); 
}

//task4
function task4(){
    const diceRoll = rand(1, 6);
    return (diceRoll===1 || diceRoll===5) ? console.log(`Antanas turi pirkti televizorių, nes išsirideno ${diceRoll}`) : 
    (diceRoll===3 || diceRoll===4) ? console.log(`Antanas turi pirkti skalbimo mašiną, nes išsirideno ${diceRoll}`) : 
    console.log(`Antanas turi pirkti šaldytuvą, nes išsirideno ${diceRoll}`);
}
for(let i=0; i<10; i++){
    task4(); 
}

//task5
function task5(){
    const numberList=[];
    for(let i=0; i<3;i++){
        numberList.push(rand(1, 7));
    }
    numberList.sort(function(a, b){return a - b});
    numbersAsString='';
    for(let i=0; i<numberList.length;i++){
        numbersAsString+=numberList[i]+' ';
    }
    console.log(numbersAsString);

}
    

//task5 with rcursive
function task6(){
    const numberList=[];
    for(let i=0; i<3;i++){
        numberList.push(rand(1, 7));
    }

    const arrayNew=[];

    function repp(){
        let low=Infinity;
        let index=Infinity;
        for(let i = 0 ; i < numberList.length; i++){
            if(numberList[i]<low){
                low=numberList[i];
                index=i;
            }
        }
        arrayNew.push(low);
        numberList.splice(index,1);
        if(numberList.length!=0){
            repp();
        }
        }
    repp();
    console.log(arrayNew);
}

for(let i=0; i<10; i++){
    task5(); 
}


