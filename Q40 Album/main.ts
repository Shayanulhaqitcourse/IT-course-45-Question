function myAlbum(artistName: string, albumTitle: string){
    return {artistName, albumTitle}
}
let album1 = myAlbum("Ali", "Rang-e-Mohabat");
let album2 = myAlbum("Madad", "Roshne Andhera");
let album3 = myAlbum("Ayaz", "Mausm-e-Dil");
console.log(album1);
console.log(album2);
console.log(album3);

function myAlbum2(artistName: string, albumTitle: string, numberofTrack?: number){
    return {artistName, albumTitle, numberofTrack}
    }
    let album4 = myAlbum2("Ali", "Dil hai", 30);
    let album5 = myAlbum("Madad", "Ajeeb Khani", 55);
    let album6 = myAlbum("Shayan", "TypeScript ke coding");
console.log(album4);
console.log(album5);
console.log(album6);
    