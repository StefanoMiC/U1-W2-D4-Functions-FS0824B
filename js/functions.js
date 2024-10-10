// FUNZIONI
// una funzione è un BLOCCO DI CODICE RIUTILIZZABILE

// PUO' ricevere dei valori in ingresso anche detti parametri (input)
// PUO' avere un valore di ritorno, in uscita (output)

// definiamo una funzione semplice SENZA INPUT e SENZA OUTPUT

// 1) MOMENTO DELLA DEFINIZIONE o dichiarazione della funzione
// questa funzione si definisce una funzione VOID, perché non ha nessun valore di ritorno
function bark() {
  console.log("BAU");
  console.log("BAU");
  console.log("BAU");
}
// in questo momento NON SUCCEDE NULLA fino a che...

// 2) MOMENTO DELLA ESECUZIONE, invocazione della funzione
bark();
bark();
bark();

// ⚠️DICHIARARE UNA FUNZIONE non equivale all'eseguirla!
// la funzione potrà eseguire il suo codice solamente dopo che verrà invocata almeno una volta

// esempio di funzione NON VOID quindi FRUITFUL (fruttifera, che restituisce un output)
// una funzione fruttifera avrà un return alla fine della sua esecuzione con affianco il valore da restituire come output
// una funzione void restituirà SEMPRE undefined
function sum() {
  const summed = 10 + 1;
  console.log(summed);
  // il return stabilisce la fine dell'esecuzione del contesto della funzione,
  // e serve a restituire un valore nel punto in cui la funzione è stata invocata
  return summed;
  // non ci può essere mai nulla dopo un return, verrebbe ignorato
}

const returnedValue = sum();
console.log(returnedValue);

const doubleSum = sum() + 10; // posso trattare la chiamata di funzione come IL VALORE CHE MI RITORNERA'
console.log(doubleSum);

// altro esempio di funzione VOID, una funzione che produce un effetto al di fuori di sé
let num = 0;

function addOne() {
  num++;
}

console.log(num); // 0
addOne();
addOne();
addOne();
addOne();
console.log(num); // 4

// PARAMETRI DI FUNZIONE
// un parametro è un contenitore di un valore che arriverà "da fuori" e ci permette di variare l'effetto che ha una funzione
// un parametro mi permette anche di definire dove questo valore verrà utilizzato nel codice della funzione
function sayHi(param) {
  console.log("Ciao " + param);
}

// Un parametro si valorizzerà SOLO nel momento dell'INVOCAZIONE della funzione
sayHi("Stefano");
sayHi("Cristian");
sayHi("Mahdi");
sayHi("Martina");
sayHi("Davide");

// esempio con più di un parametro
function sayHiAgain(name, symbol) {
  console.log("Hello " + symbol + name);
}

sayHiAgain("Stefano", "!");
sayHiAgain("Antonio", "*");
sayHiAgain("Emanuele", "__", "blah", "blah"); // applicare più dei parametri richiesti dalla funzione non produce nessun errore, ma neanche nessun effetto

function randomNum() {
  // Math.random() genera un numero da 0 a 0.999999
  const random = Math.random() * 10; // che moltiplicato per un altro numero ci darà un valore prossimo a quella cifra // es. 9.991
  const floored = Math.floor(random); // arrotonda per difetto => 4.9 diventa 4
  const ceiled = Math.ceil(random); // arrotonda per eccesso => 4.9 diventa 5
  console.log("random", random);
  console.log("floor", floored);
  console.log("ceil", ceiled);
}

function dynamicSum(num1, num2) {
  if (typeof num1 === "number" && typeof num2 === "number" && !isNaN(num1) && !isNaN(num2)) {
    return num1 + num2;
  } else {
    return "devi passare numeri come parametri";
  }
}

const result = 5 + 3;

// 5 e 2 sono gli ARGOMENTI della funzione che diventeranno poi i valori dei rispettivi parametri
console.log(dynamicSum(5, 2));

// espressioni o valori dinamici di variabili vengono valutate prima di passare il valore al parametro
console.log(dynamicSum(5 * "ciao", 10));
console.log(dynamicSum(result, 10));

// in questo caso abbiamo un esempio di parametro non valido, perché il codice interno alla funzione lo rifiuterebbe
console.log(dynamicSum("25", 0));
// anche in questo caso finiremmo nel caso else perché num1 e num2 sarebbero undefined
console.log(dynamicSum());

// potremmo creare una funzione con dei parametri di default
// se il valore del parametro, nel momento dell'esecuzione non dovesse valorizzarsi (undefined),
// il valore di default verrebbe assegnato in automatico

function dynamicSum2(num1 = 0, num2 = 0) {
  return num1 + num2;
}

console.log(dynamicSum2(2));
console.log(dynamicSum2());

// funzione come espressione salvata in una variabile con let/const (NON PIU' HOISTING)

const sayHi2 = function (name) {
  return "ciao " + name;
};

console.log(sayHi2("Stefano"));

// funzione dichiarata come funzione freccia ( arrow function )
// ha delle peculiarità:
// 1) mi permette di omettere le parentesi tonde quando esiste un solo parametro
// 2) mi permette di avere un return implicito nel caso di istruzioni semplici a singola riga e se omettiamo le graffe!

// const sayHi3 = (name) => {
//   return "ciao " + name;
// };

const sayHi3 = name => "hey " + name;

console.log(sayHi3("Epicode"));

const giveMeRandom = function () {
  return Math.floor(Math.random() * 11);
};

const generateNumbsList = function (limit = 10) {
  const randomNumbs = [];
  for (let i = 0; i < limit; i++) {
    const newNum = giveMeRandom();
    randomNumbs.push(newNum);
  }

  return randomNumbs;
};

console.log(generateNumbsList(1));
console.log(generateNumbsList(5));
console.log(generateNumbsList(100));
