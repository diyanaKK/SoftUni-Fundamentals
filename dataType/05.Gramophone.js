function solve(band ,album ,song){
    let duration = band.length * album.length * song.length/2;
    let rotate = Math.ceil(duration / 2.5);
    console.log(`The plate was rotated ${rotate} times.`)
}
solve('Black Sabbath', 'Paranoid','War Pigs')