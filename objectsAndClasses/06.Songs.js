function playlistSong(input) {
    class Song{
        constructor(playlist,name,time){
            this.playlist = playlist,
            this.name = name,
            this.time = time
            
        }
    }


 
let songs=[]
let numberOfSongs = input.shift()
let desirePlaylist = input.pop()

for(let i = 0;i<numberOfSongs;i++){
    let currentInput = input[i]
    let currentArray = currentInput.split('_')
    let currentSong = new Song(currentArray[0],currentArray[1],currentArray[2])
    songs.push(currentSong)
}
if(desirePlaylist=== 'all'){
    songs.forEach((s) => console.log(s.name))
}else{
   let filtered =songs.filter((s) => s.playlist === desirePlaylist)
   filtered.forEach((s) => console.log(s.name))
}

}
playlistSong([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite'])