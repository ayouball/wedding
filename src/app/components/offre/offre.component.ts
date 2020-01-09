import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HomeService } from 'src/app/services/home.service';
import { Pack } from 'src/app/models/pack';

@Component({
  selector: 'app-offre',
  templateUrl: './offre.component.html',
  styleUrls: ['./offre.component.css']
})
export class OffreComponent implements OnInit {

  offre: Pack;

  constructor(private router:Router, private route:ActivatedRoute, private homeService:HomeService) { }

  ngOnInit() {
    let id=this.route.snapshot.params.id;
    //console.log(id)
    this.getOffer(id)
  }

  getOffer(id){
    this.homeService.findOne(id).subscribe(offre => {this.offre = offre; console.log(this.offre)});
  }


}
