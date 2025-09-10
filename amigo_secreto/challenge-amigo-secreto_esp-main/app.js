// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//array 
let amigos =[]; 

//funcion insertar amigo 
function agregarAmigo(nombre)
{
    let nombre_amigo= document.getElementById('amigo').value;

    if(nombre_amigo != "")
    {
         amigos.push(nombre_amigo);
        document.getElementById('amigo').value="";
        
    }
    else 
    {
       alert("Por favor, inserte un nombre.");
    }

   // document.getElementById('amigo').innerHTML="";

   listaAmigos(); 
}

//funcion para lista de amigos 
function listaAmigos()
{
    let lista = document.getElementById('listaAmigos'); 
    lista.innerHTML=""; 
    
    for(let i=0; i<amigos.length; i++)
    {
        let item= document.createElement('li'); 
        item.textContent= amigos[i]; 
        lista.appendChild(item);
    }
    return lista; 

}


//Funcion sorteo
function sorteo()
{
    if(amigos.length=== 0)
    {
        alert("no hay smigos en el arreglo"); 
        return; 
    }
    if(amigos.length!=0)
    {
    let res= Math.floor(Math.random()*amigos.length); 

    let amigoElemento= document.getElementById('resultado');
    amigoElemento.innerHTML= "";

    let item = document.createElement('li');
    item.textContent = "Tu amigo secreto es: " + amigos[res];
   amigoElemento.appendChild(item);


    

    }

}