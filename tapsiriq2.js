class Message{
    constructor(ad,gonderilmeVaxti,mesaj){
        this.ad=ad;
        this.gonderilmeVaxti=gonderilmeVaxti;
        this.mesaj=mesaj;
    }
    toString(){
        console.log(`Mesaji gonderen: ${this.ad}\nGonderilme vaxti: ${this.gonderilmeVaxti}\nMesaj: ${this.mesaj}`)
    }
}

class Messenger extends Message{
    history=[];

    show_history(){
        this.history.forEach(item=>{
            console.log(item);
        })
    }
    send(author,text){
        this.ad=author;
        this.mesaj=text;
        this.history.push(this.gettime()+ ` ${this.ad}: ${this.mesaj}`)
    }
    gettime() {
        let now = new Date();
        return `${now.getHours()}:${now.getMinutes()}`
    }
}

let a = new Messenger()
a.send('adil','asdfasdfa')
a.send('adil','asdfasdfasdfa')
a.send('meryem','iehifniendie')
a.show_history()

