// const cover = 
console.log(data[0].album.cover_medium);
console.log(data[0].preview);
console.log(data[0].link);
console.log(data[0].album.title);
console.log(Math.round(data[0].duration / 60) + " min");

// data.forEach(song => {
//     console.log(song.preview)
// });



// ['id', 'readable', 'title', 'title_short', 'title_version', 'link', 'duration', 'rank', 'explicit_lyrics', 'explicit_content_lyrics', 'explicit_content_cover', 'preview', 'contributors', 'md5_image', 'artist', 'album', 'type']
//         albumList.insertAdjacentHTML("afterbegin", 
//         `<li>
//             <img src="${song.album.cover_medium}">
//             ${song.title}
//             ${song.album.title}
//             ${song.preview}
//             ${song.link}
//             ${Math.round(song.duration / 60)} min
//         </li>`)

// const albumList = document.querySelector(".album-list")
// console.log(albumList)        

let albums = [];
let albumPreview = [];
data.forEach(song => {
    if(!albums.includes(song.album.title)) {
        albums.push(song.album.title)
        // albumPreview.push(song.title + " --- " + song.album.title)
        albumPreview.push(
            {cover: song.album.cover_big, 
                title: song.title, 
                album: song.album.title,
                preview: song.preview,
                link: song.link,
                duration: Math.round(data[0].duration / 60) + " min"
            })
    } 
});
console.log(albumPreview)

albums = []
const albumList = document.querySelector(".album-list")
data.forEach(song => {
    if(!albums.includes(song.album.title)) {
        albums.push(song.album.title);
        albumList.insertAdjacentHTML("afterbegin",
            `<div class="card">
                <img src="${song.album.cover_medium}">
                <audio controls class="audio">
                    <source src="${song.preview}" type = "audio/mpeg">
                </audio>
                <a href="${song.link}" target=_blank class="deezer">Deezer</a>
                ${song.album.title}
                <div class="duration">Duration: ${Math.round(data[0].duration / 60)} min</div>
            </div>`);
    } 
});
// cover
// lecture musique
// lien deezer
// nom de l'album
// bonus duration en minute


// console.log(albums);
// 
// console.log(albums[0])
// // albums.forEach(album => {
// //     albumList.insertAdjacentHTML("afterbegin", `<li>${album[0]}</li>`)});
// // Expected output: true

// for (const [album, preview] of Object.entries(albums)) {
//     albumList.insertAdjacentHTML("afterbegin", 
//     `<li>${album}:
//         <audio controls>
//             <source src = "${preview[0]}" type = "audio/mpeg">
//         </audio>
//     </li>`);
//     // console.log(`${album}: ${preview}`);
//   }


// let albums = {};
// data.forEach(song => {
//     if(!albums[song.album.title]) {
//         const album = [song.preview]
//         albums[song.album.title] = album
//     } else {
//         albums[song.album.title].push(song.preview)
//     }
    // console.log(song.title + " --- " + song.album.title);
// });

//<audio controls>
//    <source src = "/html/Kalimba.mp3" type = "audio/mpeg">
//</audio>



