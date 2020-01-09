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
    prix : undefined,
    disponible : true
  }

  packs: Pack[] = [];
  files: File[] = [];

  title = 'File-Upload-Save';
  //selectedFiles: FileList;
  //currentFileUpload: File;
  //progress: { percentage: number } = { percentage: 0 };
  selectedFile = null;
  changeImage = false;

  currentProduct;
  selectedFiles;
  progress: number;
  currentFileUpload: any;
  private currentTime: number;
  private editPhoto: boolean;
  private mode: number=0;

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
      console.log(pack)
      this.packs = [pack, ...this.packs];
      this.reset();
      this.uploadPhoto(pack.id);
    });
  }

  edit(pack){
    this.showform = true;
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



  onEditPhoto(p) {
    this.currentProduct=p;
    this.editPhoto=true;
  }

  onSelectedFile(event) {
    this.selectedFiles=event.target.files;
  }

  uploadPhoto(id) {
    for (let i = 0; i < this.selectedFiles.length; i++) {
      this.progress = 0;
      this.currentFileUpload = this.selectedFiles.item(i)
      this.packService.uploadPhotoProduct(this.currentFileUpload,id).subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progress = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          //console.log(this.router.url);
          //this.getProducts(this.currentRequest);
          //this.refreshUpdatedProduct();
          this.currentTime=Date.now();
          this.editPhoto=false;
        }
      },err=>{
        alert("Problème de chargement");
      })
  }
    this.selectedFiles = undefined
  }
  
}
