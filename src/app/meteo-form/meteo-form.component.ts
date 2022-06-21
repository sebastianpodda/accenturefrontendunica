import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MeteoService} from '../meteo.service';

@Component({
  selector: 'app-meteo-form',
  templateUrl: './meteo-form.component.html',
  styleUrls: ['./meteo-form.component.css']
})
export class MeteoFormComponent implements OnInit {

  angForm: FormGroup;

  @Input() isWeatherReady;
  weather;

  constructor(private fb: FormBuilder, private meteoService: MeteoService) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      location: [''],
    });
  }

  getWeather() {
    const location = this.angForm.controls.location.value;
    this.meteoService.getWeather(location).subscribe(
      data => {
        this.weather = data;
        this.isWeatherReady = true;
      }
    );
  }

  ngOnInit(): void {

  }

}
