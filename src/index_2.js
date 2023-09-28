const baseUrl= "http://api.openweathermap.org/data/2.5/weather?";
const city = "Quito";
const id='4f55508ad37c2f3b2fca3a115784a320';

const appNode= document.getElementById("app");
const inputCity = document.getElementById("city");
const url = `${baseUrl}q=${city}&appid=${id}`;

const searchButton = document.getElementById("search");

function addCard() {
    console.log("hols");
   
};

searchButton.addEventListener("click",addCard);

 //const name = await getDataApp();
  /*  const container = document.createElement("div");
    const parr = document.createElement("p");
    parr.className = "hola";
   // parr.textContent= name;
    container.appendChild(parr);
    //const newCard = createCardNode(resp);
    appNode.append(container);*/
/*
const getDataJson = async(city) => {
    const response = await fetch(url)
    const data = await response.json()
    return data;
}

const getDataApp = async() => {
    const datajson = await getDataJson(city);
    return datajson.name;
}
*/

/*

const createCardNode = (responseJSON) => {

    
    return container;
};

*/

 /*      const cont_city = document.createElement("p");
            cont_city.textContent = responseJSON.name;

            const cont_country = document.createElement("p");
            cont_country.textContent = responseJSON.sys.country;

            const cont_description = document.createElement("p");
            cont_description.textContent = responseJSON.weather[0].description;

            const cont_feelsLike = document.createElement("p");
            cont_feelsLike.textContent = responseJSON.main.feels_like;

            const cont_humidity = document.createElement("p");
            cont_humidity.textContent = responseJSON.main.humidity;

            const cont_temp = document.createElement("p");
            cont_temp.textContent = responseJSON.main.temp;
                    
            container.append(cont_city,cont_country,cont_description,cont_feelsLike,cont_humidity,cont_temp);
        }
        );*/
    //const resp = conection_API();
    //console.log(container);