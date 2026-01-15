var a = 7
var prime = true
var start = 2

while(start <= Math.sqrt(a)){
    if(a % start == 0){
        prime = false
        break
    }
    start++
}
if(prime){
    console.log("Prime")

}else{
    console.log("Not Prime")
}

