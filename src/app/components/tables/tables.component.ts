import { Component, OnInit } from '@angular/core';
import { TableServiceService } from 'src/app/services/table-service.service';
import { Table } from 'src/app/models/table';
import { HttpResponse, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {

  editForm = false;
  showform =false;

  nvtable: Table = {
    nbrChairs : undefined ,
    style: '',
  }

  tables: Table[] = [];

  constructor(private tableServiceService : TableServiceService) { }

  ngOnInit() {
    this.getTables();
  }

  getTables(){
    this.tableServiceService.findAll().subscribe(tables => this.tables = tables );
  }

  deleteTable(id){
    this.tableServiceService.delete(id).subscribe(()=>{this.tables = this.tables.filter(table => table.id != id)});
  }

  add(){
    this.tableServiceService.add(this.nvtable).subscribe((table) => {
      console.log(table)
      this.tables = [table, ...this.tables];
      this.reset();
    });
  }

  edit(table){
    this.showform = !this.showform;
    this.nvtable=table
    this.editForm = true;
    console.log(this.showform )
  }

  reset(){
    this.nvtable={
      nbrChairs : undefined ,
      style: '',
    }
  }

  update(){
    this.tableServiceService.update(this.nvtable).subscribe(table => {
      this.reset();
      this.editForm = false;
    });
  }
}
