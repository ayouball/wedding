import { Component, OnInit } from '@angular/core';
import { Pack } from 'src/app/models/pack';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-offre-section',
  templateUrl: './offre-section.component.html',
  styleUrls: ['./offre-section.component.css']
})
export class OffreSectionComponent implements OnInit {

  offres: Pack[] = [];

  constructor(private homeService : HomeService) { }

  ngOnInit() {
    this.getOffers();

  }

  getOffers(){
    this.homeService.findAllDispo().subscribe(offres => {this.offres = offres; console.log(this.offres)});
  }

}
