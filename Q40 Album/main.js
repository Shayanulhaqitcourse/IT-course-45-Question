function myAlbum(artistName, albumTitle) {
    return { artistName: artistName, albumTitle: albumTitle };
}
var album1 = myAlbum("Ali", "Rang-e-Mohabat");
var album2 = myAlbum("Madad", "Roshne Andhera");
var album3 = myAlbum("Ayaz", "Mausm-e-Dil");
console.log(album1);
console.log(album2);
console.log(album3);
function myAlbum2(artistName, albumTitle, numberofTrack) {
    return { artistName: artistName, albumTitle: albumTitle, numberofTrack: numberofTrack };
}
var album4 = myAlbum2("Ali", "Dil hai", 30);
var album5 = myAlbum("Madad", "Ajeeb Khani", 55);
var album6 = myAlbum("Shayan", "TypeScript ke coding");
console.log(album4);
console.log(album5);
console.log(album6);
