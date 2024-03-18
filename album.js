"use strict";
function make_album(Artist_name, Album_title, tracks) {
    const album = {
        Artist_name,
        Album_title,
        tracks
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
const album1 = make_album("Artist1", "Albumtitle1");
const album2 = make_album("Artist2", "Albumtitle2");
const album3 = make_album("Artist3", "Albumtitle3", 3);
console.log(album1);
console.log(album2);
console.log(album3);
