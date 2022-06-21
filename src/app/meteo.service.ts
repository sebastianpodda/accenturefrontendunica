import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MeteoService {

  uri = 'http://localhost:8000/';

  constructor(private http: HttpClient) {
  }

  getWeather(city: string) {
    return this.http.get(this.uri + 'weather/' + city);
  }

}
