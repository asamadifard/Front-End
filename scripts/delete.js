addEventListener("DOMContentLoaded", async function(){
    document.querySelector("#deleteBtn").addEventListener("click",deleteSong)
    getAllSongs()
})

async function getAllSongs(){
    const response = await fetch("http://localhost:3000/songs")
    if(response.ok){
        const songs = await response.json()
        let html = ""
    for(let song of songs){
        html += `<option value="${song.id}">${song.title}</option>`
    }
    }
    async function deleteSong(){
        const songID = document.querySelector("#songDropDown option.checked").value
        const response = await fetch("http://Localhost:3000/songs/" + songID,{
            method: "DELETE"
        })
        if(response.ok){
            getAllSongs()
        } else {
            document.querySelector("#error").innerText = "Cannot Delete song"
    }
    }}