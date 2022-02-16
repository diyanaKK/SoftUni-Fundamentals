function solve(input){
let heros =[]
    for(let line of input){
        let [name,level,items] = line.split(' / ')
       items = items.split(', ').join(', ')
        
        
        let hero ={
            name:name,
            level:+level,
            items :items
        }
        
        heros.push(hero)
        
    }
heros.sort((a,b)=>{
    a.level - b.level
})
heros.sort((a,b)=> a.level - b.level)
heros.forEach(hero => {
     console.log(`Hero: ${hero.name}`),
console.log(`level => ${hero.level}`),
console.log(`items => ${hero.items}`)})

}
solve(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'])