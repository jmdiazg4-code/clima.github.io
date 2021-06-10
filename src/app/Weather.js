export class Weather {
    constructor(city, countryCode) {
        this.apikey = '229f38886002d8aad89bcc972e132bdd';
        this.city = city;
        this.countryCode = countryCode;

    }

    async getWeather(){
        const URI= `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&APPID=${this.apikey}&units=metric`;
        const response = await fetch(URI);
        const data = await response.json();
        return data;
    }


    changeLocation(city,countryCode){
        this.city = city;
        this.countryCode = countryCode;
    }
}