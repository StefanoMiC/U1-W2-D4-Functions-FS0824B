const phrase = "Epicode is an awesome school";

// il metodo split mi permette di sezionare una stringa e ottenere un array corrispondente
// in questo caso non specifichiamo un carattere in particolare dove applicare il taglio e
// quindi ci creerà un array di tutti i caratteri (inclusi gli spazi)
const letters = phrase.split(""); // possiamo salvarlo in una variabile chiamata letters
console.log(letters);

// avendo noi ora un array possiamo usare anche metodi che prima non erano disponibili sulle stringhe
letters.splice(0, 1);

letters.pop();

// per poi concludere col ricreare una stringa a partire dall'array modificato
console.log(letters.join(""));

// stessa cosa, ma utilizziamo il carattere di spazio per apportare il "taglio"
// otteniamo quindi un array di parole perché avremo tagliato la stringa sui caratteri di spazio
const words = phrase.split(" ");
// possiamo sempre manipolare l'array con i metodi degli array
words.shift();
words.pop();
// e poi riportare l'array a stringa con il metodo join che in questo caso useremo applicando di
// nuovo il carattere di spazio per ri-separare le parole come nell'originale
console.log(words.join(" "));
