function mash() {
    let home= getHome()
    let children = getChildrenCount()
    let string = "You will live in a " +getHome()+  " and you will have " + getChildrenCount()+ " kids!, and you'll drive a " + getCar()
    return string
}
result = mash();
console.log(result)

function getHome() {
    let home = ["Mansion", "Apartment", "Shack", "House", "Trees", process.argv[2]]
    let pick = Math.random() * home.length
    let integer = Math.floor(pick)
    return home[integer]
}

function getChildrenCount() {
let children = (Math.random() * 2 ) + 1 * 100
let childrennumber = Math.floor(children)
return childrennumber
}

function getCar(){
    let cars = ["lambo", "convertible", "box with wheels", "tank"]
    let carpick = Math.random() * cars.length 
    let coolcar = Math.floor(carpick)
    let car = cars[coolcar]
    return car; 
}
