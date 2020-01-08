import { Component, OnInit } from '@angular/core';
import { PackService } from 'src/app/services/pack.service';
import { Pack } from 'src/app/models/pack';
import { HttpResponse, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  editForm = false;
  showform =false;

  nvpack: Pack = {
    titre : '',
    description : '',
    disponible : true
  }

  packs: Pack[] = [];
  files: File[] = [];

  title = 'File-Upload-Save';
  selectedFiles: FileList;
  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 };
  selectedFile = null;
  changeImage = false;

  

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

  edit(pack){
    this.nvpack=pack
    this.editForm = true;
  }

  reset(){
    this.nvpack={
      titre : '',
      description : '',
      disponible: true
    }
  }

  update(){
    this.packService.update(this.nvpack).subscribe(pack => {
      this.reset();
      this.editForm = false;
    });
  }

  disponible(pack){
    this.packService.disponible(pack.id,pack.disponible).subscribe(()=>{
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
  
  change($event) {
    this.changeImage = true;
    }
    changedImage(event) {
    this.selectedFile = event.target.files[0];
    }
    upload() {
    this.progress.percentage = 0;
    this.currentFileUpload = this.selectedFiles.item(0);
    this.packService.pushFileToStorage(this.currentFileUpload).subscribe(event => {
    if (event.type === HttpEventType.UploadProgress) {
    this.progress.percentage = Math.round(100 * event.loaded / event.total);
    } else if (event instanceof HttpResponse) {
    alert('File Successfully Uploaded');
    }
    this.selectedFiles = undefined;
    }
    );
    }

    selectFile(event) {
    this.selectedFiles = event.target.files;
    }

}
