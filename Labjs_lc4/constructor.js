class Song{
    constructor(title,artist){
        this.title = title;
        this.artist = artist;
    }
}

const mySong = new Song("Bohemian Rhapody","Queen");
console.log(mySong.title);