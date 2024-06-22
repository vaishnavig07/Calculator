// function fun1(){
//     document.getElementById("numberinput").value+=1
// }
// function fun2(){
//     document.getElementById("numberinput").value+=2
// }
// function fun3(){
//     document.getElementById("numberinput").value+=3
// }
// function fun4(){
//     document.getElementById("numberinput").value+=4
// }
// function fun5(){
//     document.getElementById("numberinput").value+=5
// }
// function fun6(){
//     document.getElementById("numberinput").value+=6
// }
// function fun7(){
//     document.getElementById("numberinput").value+=7
// }
// function fun8(){
//     document.getElementById("numberinput").value+=8
// }
// function fun9(){
//     document.getElementById("numberinput").value+=9
// }
// function fun0(){
//     document.getElementById("numberinput").value+=0
// }
// function funadd(){
//     document.getElementById("numberinput").value+="+"
// }
// function funminus(){
//     document.getElementById("numberinput").value+="-"
// }
// function funmulti(){
//     document.getElementById("numberinput").value+="*"
// }
// function fundivide(){
//     document.getElementById("numberinput").value+="/"
// }

function fun(b){
    var x=b
    if(x=="AC"){
        document.getElementById("numberinput").value=""
    }else if(x=='='){
        var a =document.getElementById("numberinput").value
        var result = eval(a)
        document.getElementById("numberinput").value=result
    }
    else{
        document.getElementById("numberinput").value+=x
    }
}

// function funequal(){
//     var a =document.getElementById("numberinput").value
//     var result = eval(a)
//     document.getElementById("numberinput").value=result
// }
// function funclear(){
//     document.getElementById("numberinput").value=""
// }
