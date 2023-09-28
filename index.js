const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a95878e558mshb971ad484f1c80dp1d72bfjsn4b3fbc36188b',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon =document.querySelector(".weather-icon");

const getWeather =(city)=>{

    document.querySelector(".city").innerHTML=searchBox.value
     fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${searchBox.value}`, options)
        .then(response => response.json())
        .then((response)=>{
            console.log(response)
            document.querySelector(".temp").innerHTML=response.temp +" °C"
            document.querySelector(".humidity").innerHTML=response.humidity+ "%"
            document.querySelector(".wind").innerHTML=response.wind_speed +" kmph"

            console.log(response.cloud_pct)

            if(response.cloud_pct>=85){
                weatherIcon.src="images/rain.png";
                console.log("Rain");
            }
            else if(response.cloud_pct<85 && response.cloud_pct>=70){
                weatherIcon.src="images/drizzle.png";
                console.log("drizzle");
            }
            else if(response.cloud_pct <70 && response.cloud_pct>=55){
                weatherIcon.src="images/clouds.png";
                console.log("cloud");
            }
            else if(response.cloud_pct <55){
                weatherIcon.src="images/clear.png";
                console.log("clear");
            }
        
        })
        .catch(err => console.log(err));
}

searchBtn.addEventListener("click", (e)=>{
    getWeather(searchBox.value)
})