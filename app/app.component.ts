import { Component } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  weatherData: any;
  error: string = '';
  city: string = ''; // Define the city variable here

  constructor(private weatherService: WeatherService) {}

  searchWeather() { // Remove the city parameter from the function
    this.weatherService.getWeatherData(this.city).subscribe(
      (data) => {
        this.weatherData = data;
        this.error = ''; // Clear any previous error
      },
      (error) => {
        this.weatherData = null;
        this.error = 'City not found'; // Display error message
      }
    );
  }


  // weatherData: any;
  // error: string = '';

  // constructor(private weatherService: WeatherService) {}

  // searchWeather(city: string) {
  //   this.weatherService.getWeatherData(city).subscribe(
  //     (data) => {
  //       console.log(data); // Log the entire API response
  //       this.weatherData = data;
  //       this.error = ''; // Clear any previous error
  //     },
  //     (error) => {
  //       this.weatherData = null;
  //       this.error = 'City not found'; // Display error message
  //     }
  //   );
  //   }
  }