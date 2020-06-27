function getNum(num){
    var input = document.getElementById("field");
    input.value += num;
    console.log(num)
}
function clearInput(num){
    var input = document.getElementById("field");
    input.value = "";
}
function result(num){
    var input = document.getElementById("field");
    input.value = eval(input.value);
}