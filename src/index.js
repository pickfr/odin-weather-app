import WeatherController from "./weather-controller";
import WeatherModel from "./weather-model";
import WeatherView from "./weather-view";
import { createDivElementID } from "./helper-functions";

createDivElementID("root", document.body);

const app = new WeatherController(new WeatherModel(), new WeatherView());
window.app = app;
