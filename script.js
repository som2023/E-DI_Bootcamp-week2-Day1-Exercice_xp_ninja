 /*-----------EXERCISE_1--------------------*/
5 >= 1
console.log(5 >= 1)//true
0 === 1
console.log(0 === 1 ) //false
4 <= 1
console.log(4 <= 1) //false
1 != 1
console.log(1 != 1) //false
"A" > "B"
console.log("A" > "B") //false
"B" < "C"
console.log("B" < "C") //true
"a" > "A"
console.log("a" > "A") //true
"b" < "A"
console.log("b" < "A") //false
true === false
console.log(true === false) //false
true != true
console.log(true != true) //false

/*-----------EXERCISE_2--------------------*/
let nombre1 = prompt('Entrez deux nombres separes par une virgule');
let nombre = nombre1.split(",")
let x = nombre[0]
let y = nombre[1]
alert(nombre1 + " -> " + (Number(x) + Number(y)))

/*---------------------EXERCISE_3-------------------------*/
let str = prompt("Enter text")

if(str.includes("Nemo"))
{
    console.log("I found Nemo at "+ str.indexOf("Nemo"))
}else{
    console.log("I can’t find Nemo")
}
/*-----------------EXERCISE_4---------------------*/ 
let nombre2 = prompt("Enter a number")
if(nombre2 < 2)
{
    console.log("boom")
}else if(nombre2%5 == 0 && nombre2%2 == 0)
{
    console.log(("b"+"o".repeat(nombre2)+"m !").toUpperCase() )

}
else  if( nombre2%2 == 0) {
    
    console.log("b"+"o".repeat(nombre2)+"m !" )
}else if(nombre2%5 == 0)
{
    console.log(("b"+"o".repeat(nombre2)+"m").toUpperCase() )
}else{
    console.log("b"+"o".repeat(nombre2)+"m")
}