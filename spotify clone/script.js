async function getSongs() {

    let a = await fetch("http://127.0.0.1:3000/songs/")
    let response = await a.text();
    console.log(response)
    let div = document.createElement("div")
    div.innerHTML = response;
    let as = div.getElementsByTagName("a")
    let songs = []
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".mp3")) {
            songs.push(element.href.split("/songs/")[1])
        }
    }
    return songs
}
async function main() {
    //to  get list of all songs
    let songs = await getSongs()
    console.log(songs)

    let songUL = document.querySelector(".songlist").getElementsByTagName("ul")[0]
    for (const song of songs) {
        songUL.innerHTML = songUL.innerHTML + song + `<li> ${song.replaceAll("%20", " ")} <?li>`;
    }


    var audio = new Audio(songs[0]);
    audio.play();

    //to get the song duration
    audio.addEventListener("loadeddata", () => {
        let duration = audio.duration;
        console.log(duration);
    })

}

main()
