import { Component, OnInit } from '@angular/core';
import { PackService } from 'src/app/services/pack.service';
import { Pack } from 'src/app/models/pack';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  editForm = false;
  showForm = false;
  nvpack: Pack = {
    titre : '',
    description : '',
    disponible : true
  };
  packs: Pack[] = [];
  files: File[] = [];

  constructor(private packService: PackService) { }

  ngOnInit() {
    this.getPacks();
  }

  getPacks() {
    this.packService.findAll().subscribe(packs => this.packs = packs );
  }

  deletePack(id) {
    this.packService.delete(id)
    .subscribe(() => {
      this.packs = this.packs.filter(pack => pack.id !== id);
    });
  }

  add() {
    this.packService.add(this.nvpack).subscribe((pack) => {
      this.packs = [pack, ...this.packs];
      this.reset();
    });
  }

  edit(pack) {
    this.nvpack = pack;
    this.editForm = true;
  }

  reset() {
    this.nvpack = {
      titre : '',
      description : '',
      disponible: true
    };
  }

  update() {
    this.packService.update(this.nvpack).subscribe(pack => {
      this.reset();
      this.editForm = false;
    });
  }

  disponible(pack) {
    this.packService.disponible(pack.id, pack.disponible).subscribe(() => {
      pack.disponible = !pack.disponible;
    });
  }

  onSelect(event) {
    console.log(event);
    this.files.push(...event.addedFiles);
  }

  onRemove(event) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

}
