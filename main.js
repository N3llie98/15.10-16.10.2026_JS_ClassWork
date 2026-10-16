let light = document.getElementById("light");
let dark = document.getElementById("dark");
let colorful = document.getElementById("colorful");

light.addEventListener("change", function(){
    document.body.classList.remove("dark");
    document.body.classList.remove("colorful");
} );

dark.addEventListener("change", function(){
    document.body.classList.add("dark");
    document.body.classList.remove("colorful");
} );

colorful.addEventListener("change",function(){
    document.body.classList.add("colorful");
    document.body.classList.remove("dark");
} )