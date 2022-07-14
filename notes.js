var tery = [];
let a = JSON.parse(localStorage.getItem("myToDos"));
function save() {
    console.log(a);
    if (a) {
        tery = a
    }else {
        tery = []
    }
    tery.push({ "tit": title.value, "input": input.value });
    console.log(tery);
    var f = '';
    for (i = 0; i < tery.length; i++) {
        f += `<tr><td>${i + 1}</td><td>${tery[i].tit}</td><td>${tery[i].input}</td>`
    }
    
    document.getElementById("body").innerHTML = f;
    input.value = '';
    console.log(tery);
    localStorage.setItem("myToDos", JSON.stringify(tery))
 
}
show = () =>{
    let b = '';
    for (i = 0; i < a.length; i++) {
        b += `<tr><td>${i + 1}</td><td>${a[i].tit}</td><td class="w-50">${a[i].input}</td>`
    }
    
    document.getElementById("body").innerHTML = b;
    input.value = '';
}
