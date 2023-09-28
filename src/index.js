const inputCity = document.getElementById("city");
const city = inputCity.value;
const appNode= document.getElementById("app");

//console.log(city);
const createImageNode= () =>{
    const container = document.createElement("div");
    const parr = document.createElement("p");
    parr.value = "hola";
    
    container.appendChild(parr);

    return container;
};

const addCard = () => {
    const newCont = createImageNode();
    appNode.append(newCont);
}

const searchButton = document.getElementById("search");
searchButton.addEventListener("click",addCard);
