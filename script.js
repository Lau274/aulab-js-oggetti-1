let persona = {
    nome: "Mario",
    cognome: "Rossi",
    età: 40,

    presentati() {
        console.log(`Ciao, sono ${this.nome} ${this.cognome} ed ho ${this.età} anni`)
    }
}
persona.presentati()