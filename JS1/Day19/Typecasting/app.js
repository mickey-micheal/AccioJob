let val = 10

let valinstr = String(val)

let valinbool = Boolean(val)

console.log(val,valinstr,valinbool)








console.log(1+1)
console.log(1 + "1")



let num = 23456

let str = String(num)


console.log(str.split("").reverse().join(""))

let str1 = "qwertyui"
let ans =""

for (let i = 0; i < str1.length; i++) {
    // ans = str1[i] + ans
    ans = ans + str1[str1.length - 1 - i]
}

console.log(ans)