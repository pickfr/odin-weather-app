import {
  createCustomElementID,
  createDivElementClass,
  createDivElementID,
} from "./helper-functions";

export default class WeatherView {
  constructor() {
    this.root = createDivElementID(
      "weather-app",
      document.querySelector("div", "root")
    );
    this.searchBoxContainer = createCustomElementID(
      "form",
      this.root,
      "weather-search-container"
    );
    this.search = createCustomElementID(
      "input",
      this.searchBoxContainer,
      "weather-search"
    );
    // Weather Container
    this.weatherContainer = createDivElementID("weather-container", this.root);
  }

  clearDisplay() {
    const containerContents = this.weatherContainer.childNodes;
    for (let i = 0; i < containerContents.length; i += 1) {
      const content = containerContents[i];
      content.remove();
      i -= 1;
    }
  }

  renderLoading(isLoading) {
    if (isLoading) {
      const loadingScreen = createDivElementClass(
        "loading-screen",
        this.weatherContainer
      );
      loadingScreen.textContent = "Loading";
      loadingScreen.style.backgroundColor = "#000000";
      loadingScreen.style.width = "100%";
      loadingScreen.style.height = "100vh";
      loadingScreen.style.color = "#fff";
    } else {
      this.clearDisplay();
    }
  }

  renderWeatherDayContainers(weatherDays) {
    this.clearDisplay();

    for (let i = 0; i < weatherDays.length; i += 1) {
      const day = weatherDays[i];

      const weatherDayContainer = createDivElementClass(
        "day-weather-container",
        this.weatherContainer
      );
      const weatherDayCondition = createDivElementClass(
        "day-weather-condition",
        weatherDayContainer
      );
      const weatherDayTemperature = createDivElementClass(
        "day-weather-temperature",
        weatherDayContainer
      );

      weatherDayCondition.textContent = day.condition;
      weatherDayTemperature.textContent = day.temperature;

      if (day.windSpeed && day.windDirection) {
        const weatherDayWindSpeed = createDivElementClass(
          "day-weather-wind-direction",
          weatherDayContainer
        );
        const weatherDayWindDirection = createDivElementClass(
          "day-weather-wind-direction",
          weatherDayContainer
        );

        weatherDayWindSpeed.textContent = day.windSpeed;
        weatherDayWindDirection.textContent = day.windDirection;
      }
    }
  }
}
