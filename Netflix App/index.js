
let nam={
    fullName:"Sam",
    lastName:"Will",
   
}
let print=function(city){
    console.log(this.fullName + " " + this.lastName+ " " + city)
}

let obj={
    fullName:"John",
    lastName:"Cena"
}
print.call(obj,"delhi")
print.apply(obj,["delhi"])
let val=print.bind(obj,"delhi")
val()
