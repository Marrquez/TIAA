import { Component } from '@angular/core';

/**
 * services
 * */
import { CountryStoreService } from './services/country-store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'TIAA';

  constructor( private countryService: CountryStoreService ){ };

  ngOnInit(){
    this.countryService.searchCountries();
  }
}
