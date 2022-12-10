function a (){
    console.log("a - Voce chamou o procedimento a")

}
function b (){
    console.log("b - procedimento b presente,chamou")
 c();
}
function c (){
    console.log("c - Oi sou o procedimento c, o b quem me chamou ")

}
function d (){
    console.log("d - Sou o procedimento d e chamo todo mundo, veja")

    a()
    b()
}
a();
b();
d();