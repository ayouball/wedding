import { Component, OnInit } from '@angular/core';
import { DecorationServicesService } from 'src/app/services/decoration-services.service';
import { Decoration } from 'src/app/models/decoration';
import { HttpResponse, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-decorations',
  templateUrl: './decorations.component.html',
  styleUrls: ['./decorations.component.css']
})
export class DecorationsComponent implements OnInit {

  editForm = false;
  showform =false;

  nvdecoration: Decoration = {
    lable : '',
  }

  decorations: Decoration[] = [];

  constructor(private decorationServicesService : DecorationServicesService) { }

  ngOnInit() {
    this.getDecorations();
  }

  getDecorations(){
    this.decorationServicesService.findAll().subscribe(decorations => this.decorations = decorations );
  }

  deleteDecoration(id){
    this.decorationServicesService.delete(id).subscribe(()=>{this.decorations = this.decorations.filter(decoration => decoration.id != id)});
  }

  add(){
    this.decorationServicesService.add(this.nvdecoration).subscribe((decoration) => {
      console.log(decoration)
      this.decorations = [decoration, ...this.decorations];
      this.reset();
    });
  }

  edit(decoration){
    this.showform = !this.showform;
    this.nvdecoration=decoration
    this.editForm = true;
  }

  reset(){
    this.nvdecoration={
      lable : '',
    }
  }

  update(){
    this.decorationServicesService.update(this.nvdecoration).subscribe(decoration => {
      this.reset();
      this.editForm = false;
    });
  }

}
