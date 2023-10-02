// https://api.openweathermap.org/data/2.5/weather?q=paris&appid=1ac2bd972a11dbd9efead5cd2bbcada6

// requête http vers l'api pour récupérer la météo d'une ville

getWeather("paris");

function getWeather(city){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1ac2bd972a11dbd9efead5cd2bbcada6`)
    .then((response) =>{
        response.json()
        .then(data => {
            document.getElementById("city").textContent = data.name;

            document.getElementById("icon").setAttribute("src", "https://openweathermap.org/img/wn/"+data.weather[0].icon+".png");
            
            document.getElementById("min").textContent = "La température min : " + Math.floor(data.main.temp_min - 273.15) + " °C";
            document.getElementById("real").textContent ="La température réelle : " +Math.floor(data.main.temp - 273.15) + " °C";
            document.getElementById("max").textContent =  "La température max : " +Math.floor(data.main.temp_max - 273.15) + " °C";
        })
        .catch(error => 
            console.log(error));
    })
    .catch(error => {
        console.log(error);
    })
}


// On appel le formulaire
const FORM = document.getElementById("formCity");

FORM.addEventListener('submit', (e) => {
    e.preventDefault();
    // On récupère la valeur du input
    let city = document.getElementById("ville").value;
    getWeather(city);
})
