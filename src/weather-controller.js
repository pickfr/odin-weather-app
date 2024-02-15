export default class WeatherController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.view.search.addEventListener("focusout", () => this.search());
  }

  get searchValue() {
    return this.view.search.value;
  }

  search() {
    this.model.changeWeatherQuery(this.searchValue);

    this.model.getWeatherDays().then((weatherDays) => this.render(weatherDays));
  }

  render(weatherDays) {
    this.view.renderWeatherDayContainers(weatherDays);
  }
}
