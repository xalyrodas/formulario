let root = document.querySelector("#root");


/* comentario */
let div_formulario = document.createElement("div");
div_formulario.className = "div-formulario";

/* lista de elementos */
 let formulario = [
    {nombre:"login",link:"https"},
    {nombre:"formulario1",link:"https"},
    {nombre:"formulario2",link:"https"},
    {nombre:"formulario3",link:"https"},

    ];
/* for each */ // es una funcio
    formulario.forEach(itemLista =>{ 

    let div_item = document.createElement("a")
    div_item.className = "item";
    div_item.href = itemLista.link;
    div_item.innerText = itemLista.nombre;
    
// agrego al nodo root, el elemento div_formulario

div_formulario.appendChild(div_item);
 });

 root.appendChild(div_formulario);