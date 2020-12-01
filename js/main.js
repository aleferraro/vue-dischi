/*
Facciamo una chiamata ajax all'api di boolean al seguente indirizzo.

https://flynn.boolean.careers/exercises/api/array/music

Usate Postman per vedere quali strutture e quali proprieta' vengono restituite. Vi servira' saperlo per poter estrarre i valori successivamente.

L'api ci restituirà decina di dischi musicali che dovremo mostrare all'utente utilizzando Vue.

Inizialmente l'istanza Vue non contiene dati, ma il suo stato dovra' essere aggiornato quando ricevera' dal server i dati richiesti.

Dove scrivo le operazioni asincrone per aggiornare lo stato in modo che si "eseguano senza interazioni esterne/utente"? In Vue e' possibile eseguire tali operazioni agganciandosi (hook) ad una delle fasi del suo lifecycle, ad esempio quando l'elemento del DOM corrispondente e' stato montato nell'interfaccia. MI aspetto quindi che la chiamata al server ( axios.get ... ) e la gestione della risposta (... .then( r => { ... } )  vengano inserite nella funzione mounted di Vue ( usate la documentazione per maggiori informazioni ) perche' in questa fase ho la possibilita' di accedere allo stato dell'applicazione tramite this e quindi eseguire le operazioni di aggiornamento.

Bonus:
Creare una select con i seguenti generi: pop, rock, metal e jazz.
In base a cosa scegliamo nella select vedremo solo i corrispondenti cd.
*/


const myApp = new Vue({
  el: "#root",
  data: {
    dischi: [],
    genres: [],
    selectedGenre: ''
  },
  mounted: function(){
    axios.get('https://flynn.boolean.careers/exercises/api/array/music')
    .then(result => {
      this.dischi = result.data.response;
      console.log(this.dischi);
      for (let i = 0; i < this.dischi.length; i++){
        if (this.genres.indexOf(this.dischi[i].genre) === -1) {
          this.genres.push(this.dischi[i].genre)
        }
      }
    })
  },
  methods: {

    filterGenre: function() {
      if(this.selectedGenre == ''){
        return this.dischi
      } else {
        return  this.dischi.filter(disco => disco.genre.includes(this.selectedGenre))
      }
    }
  }
})
