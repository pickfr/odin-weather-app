export default class WeatherModel {
  constructor() {
    this.weatherData = {
      location: undefined,
      today: {
        condition: undefined,
        temperature: undefined,
        windSpeed: undefined,
        windDirection: undefined,
      },
      forecast: {
        day: [],
      },
    };
    this.weatherQuery =
      "http://api.weatherapi.com/v1/forecast.json?key=796f14765237439eacb160743241302&q=london";
  }

  async fetchWeather() {
    // loading
    try {
      const response = await fetch(this.weatherQuery, { mode: "cors" });
      const weather = await response.json();
      // not loading
      return weather;
    } catch (error) {
      // not loading
      return error;
    }
  }

  async getWeatherDays() {
    const weatherData = await this.getWeatherData();
    const weatherDays = [];

    weatherDays.push(weatherData.today);
    for (let i = 0; i < weatherData.forecast.day.length; i += 1) {
      const day = weatherData.forecast.day[i];
      weatherDays.push(day);
    }
    return weatherDays;
  }

  async getWeatherData() {
    let weather;
    try {
      weather = await this.fetchWeather().then((result) => result);
    } catch (error) {
      return error;
    }
    this.weatherData.location = weather.location.name;

    // Today
    this.weatherData.today.condition = weather.current.condition.text;
    this.weatherData.today.temperature = weather.current.temp_c;
    this.weatherData.today.windSpeed = weather.current.wind_mph;
    this.weatherData.today.windDirection = weather.current.wind_degree;

    this.weatherData.forecast.day = [];
    for (let i = 1; i < weather.forecast.forecastday.length; i += 1) {
      const forecast = weather.forecast.forecastday[i];
      this.weatherData.forecast.day.push({
        condition: forecast.day.condition.text,
        temperature: forecast.day.avgtemp_c,
      });
    }

    return this.weatherData;
  }

  changeWeatherQuery(location) {
    const stringLocation = location.toString();
    this.weatherQuery = `http://api.weatherapi.com/v1/forecast.json?key=796f14765237439eacb160743241302&q=${stringLocation}&days=3`;
  }
}
