let a = Number(prompt("Enter number 1"))
let b = Number(prompt("Enter number 2"))
let operation = (prompt("Enter operater +,-,*,/"))


if(isNaN(a) || isNaN(b)){
    console.log("Invaild Input");
}
else{
    switch(operation){
        case "+":
            console.log(a+b);
            break
        case "-":
            console.log(a-b);
            break
        case "*":
            console.log(a*b);
            break
        case "/":
            console.log(a/b);
            break
        default:
            console.log("Invalid operator");
    }
}