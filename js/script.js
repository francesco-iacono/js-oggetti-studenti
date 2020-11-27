$(document).ready(
  function () {
    // Obiettivi dell'esercizio:
    // 1
    // Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà;

    // Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età.
    var studente = {
      nome: "Francesco",
      cognome: "Iacono",
      eta: 31
    };
    console.log(studente);
    // Stampare a schermo attraverso il for in tutte le proprietà;
    for (var key in studente) {
    console.log(studente[key]);
    }
    // ----------------------------------------------------------
    // 2
    // Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome;
    var studenti = [
      {
        nome: "Francesco",
        cognome: "Iacono",
      },
      {
        nome: "Marco",
        cognome: "Somma",
      },
      {
        nome: "Anna",
        cognome: "Di Maio",
      }
    ];
    console.log(studenti);

    for (var key in studenti) {
    console.log((studenti[key].nome), (studenti[key].cognome));
    document.getElementById('nomeCognome').innerHTML += (studenti[key].nome) + (studenti[key].cognome) + "<br>";
    // Ciclare su tutti gli studenti e stampare per ognuno nome e cognome;
    $('p').hide();
    $('h1').click(
        function functionName() {
        $('p').toggle();
        }
      )
    }

    // 3
    // Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
    var nuovoStudente = {};
    console.log(nuovoStudente);
    var chiediNome = prompt('Il tuo nome');
    nuovoStudente.nome = chiediNome;
    var chiediCognome = prompt('Il tuo cognome');
    nuovoStudente.cognome = chiediCognome;
    var chiediEta = parseInt(prompt('La tua eta'));
    nuovoStudente.eta = chiediEta;
    studenti.push(nuovoStudente);
  }
);
