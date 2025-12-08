addEventListener("DOMContentLoaded", async function(){
    const response = await this.fetch("http://localhost:3000/songs");
    const songs = await response.json();

    let html = ""
    for(let song of songs){
        html+= `<li>${song.title} - ${song.artist}</li>`
    }

    document.querySelector("#List_of_songs").innerHTML = html;
})