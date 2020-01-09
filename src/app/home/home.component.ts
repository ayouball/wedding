import { Component, OnInit } from '@angular/core';
import { Pack } from '../models/pack';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  offres: Pack[] = [];

  constructor(private homeService : HomeService) { }

  ngOnInit() {
    this.getOffers();

  }

  getOffers(){
    this.homeService.findAllDispo().subscribe(offres => {this.offres = offres; console.log(this.offres)});
  }

}
