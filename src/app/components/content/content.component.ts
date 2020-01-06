import { Component, OnInit } from '@angular/core';
import { PackService } from 'src/app/services/pack.service';
import { Pack } from 'src/app/models/pack';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  nvpack: Pack = {
    titre : '',
    description : '',
    disponible : true
  }
  packs: Pack[] = [];

  constructor(private packService : PackService) { }

  ngOnInit() {
    this.getPacks();
  }

  getPacks(){
    this.packService.findAll().subscribe(packs => this.packs = packs );
  }

  deletePack(id){
    this.packService.delete(id).subscribe(()=>{this.packs = this.packs.filter(pack => pack.id != id)});
  }

  add(){
    this.packService.add(this.nvpack).subscribe((pack) => {
      this.packs = [pack, ...this.packs];
      this.reset();
    });
  }

  reset(){
    this.nvpack={
      titre : '',
      description : '',
      disponible: true
    }
  }

  disponible(pack){
    this.packService.disponible(pack.id,pack.disponible).subscribe(()=>{
      pack.disponible = !pack.disponible;
    });
  }


}
