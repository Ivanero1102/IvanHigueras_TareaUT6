/* 1 */
document.querySelector("img").addEventListener("mouseenter", () => {
    document.querySelector("img").style.width = "60px";
    document.querySelector("img").style.height = "60px";
});
document.querySelector("img").addEventListener("mouseleave", () =>{
    document.querySelector("img").style.width = "auto";
    document.querySelector("img").style.height = "auto";
});

/* 2 */
document.querySelector("p").addEventListener("dblclick", () => document.querySelector("h1").style.color = "blue");

/* 3 */
document.querySelector("input").addEventListener("blur", () => document.querySelector("input").value = document.querySelector("input").value.toUpperCase());

/* 4 */
document.querySelectorAll("input[type='text']").forEach((elemento) => elemento.addEventListener("blur", () => {
    elemento.parentNode.style.color = "red";
    elemento.parentNode.style.fontWeight = "bold";
}));

/* 5 */
document.querySelector("input[name='apellidos']").addEventListener("blur", () => {
    patron = /[^a-zá-ú\s]/gi;
    let texto = document.querySelector("input[name='apellidos']").value;
    if(texto.match(patron)){
        document.querySelector("input[name='apellidos']").value = "";
    };
});

/* 6 */
// addEventListener("input")
let parrafo = document.createElement("p");
document.querySelector("input[name='nacido']").insertAdjacentElement("afterend", parrafo);
document.querySelector("input[name='nacido']").addEventListener("blur", () => {
    let texto;
    if(document.querySelector("input[name='nacido']").value%4 == 0){
        texto = "Año bisiesto";
    }else{
        texto = "Año no bisiesto";
    }
    parrafo.innerText = texto;
});

/* 7 */
document.querySelector("select[name='lista1']").addEventListener("input", () => {
    window.alert("Nacionalidad seleccionada: "+document.querySelector("select[name='lista1']").value);
});

/* 8 */


/* 9 */


/* 10 */


/* 11 */


/* 12 */


/* 13 */


/* 14 */


/* 15 */

