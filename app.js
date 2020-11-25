
function hide(){
    document.getElementById("output").style.visibility = "hidden";
}
//Result output HIDDEN before input
document.getElementById("output").style.visibility = "hidden";
// POUNDS CALCULATOR
document.getElementById("lbsInput").addEventListener("input", function(e){
    //Result output VISIBLE after input
    document.getElementById("output").style.visibility = "visible"
    let lbs = e.target.value;
    document.getElementById("gramOutput").innerHTML = lbs/0.0022046;
    document.getElementById("kiloOutput").innerHTML = lbs/2.2046;
    document.getElementById("ounceOutput").innerHTML = lbs*16;
    document.getElementById("poundOutput").innerHTML = lbs;
});
//OUNCES CALCULATOR
document.getElementById("ozInput").addEventListener("input", function(e){
    //Result output VISIBLE after input
    document.getElementById("output").style.visibility = "visible"
    let oz = e.target.value;
    document.getElementById("gramOutput").innerHTML = oz*28.3495;
    document.getElementById("kiloOutput").innerHTML = oz/35.274;
    document.getElementById("poundOutput").innerHTML = oz/16;
    document.getElementById("ounceOutput").innerHTML = oz;
});
// KILO CALCULATOR
document.getElementById("kgInput").addEventListener("input", function(e){
    //Result output VISIBLE after input
    document.getElementById("output").style.visibility = "visible"
    let kg = e.target.value;
    document.getElementById("gramOutput").innerHTML = kg*1000;
    document.getElementById("kiloOutput").innerHTML = kg;
    document.getElementById("ounceOutput").innerHTML = kg*35.274;
    document.getElementById("poundOutput").innerHTML = kg*2.20462;
});
// GRAM CALCULATOR
document.getElementById("grInput").addEventListener("input", function(e){
    //Result output VISIBLE after input
    document.getElementById("output").style.visibility = "visible"
    let gr = e.target.value;
    document.getElementById("gramOutput").innerHTML = gr;
    document.getElementById("kiloOutput").innerHTML = gr/1000;
    document.getElementById("ounceOutput").innerHTML = gr/28.35;
    document.getElementById("poundOutput").innerHTML = gr/454;
});


// SELECT MEASUREMENT UNIT
var weightSelector = document.getElementById("weightSelector");
weightSelector.addEventListener("change", function select(){
    function displayOz(){
        document.getElementById("ozInput").classList.remove("d-none");
        document.getElementById("grInput").classList.add("d-none");
        document.getElementById("kgInput").classList.add("d-none");
        document.getElementById("lbsInput").classList.add("d-none");
    }
    function displayLbs(){
        document.getElementById("lbsInput").classList.remove("d-none");
        document.getElementById("ozInput").classList.add("d-none");
        document.getElementById("grInput").classList.add("d-none");
        document.getElementById("kgInput").classList.add("d-none");
    }
    function displayKg(){
        document.getElementById("kgInput").classList.remove("d-none");
        document.getElementById("ozInput").classList.add("d-none");
        document.getElementById("grInput").classList.add("d-none");
        document.getElementById("lbsInput").classList.add("d-none");
    }
    function displayGr(){
        document.getElementById("grInput").classList.remove("d-none");
        document.getElementById("ozInput").classList.add("d-none");
        document.getElementById("lbsInput").classList.add("d-none");
        document.getElementById("kgInput").classList.add("d-none");
    }
    var i = weightSelector.selectedIndex;
    if (weightSelector.options[i].value === "oz"){
        displayOz()
    } else if (weightSelector.options[i].value === "lbs"){
        displayLbs()
    }else if (weightSelector.options[i].value === "kg"){
        displayKg()
    }else if (weightSelector.options[i].value === "gr"){
        displayGr()
    }
})









