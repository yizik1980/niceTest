import { Component, OnInit } from '@angular/core';
import { GridOptionsService } from 'src/app/services/grid-options.service';
import { Vehicle } from '../../models/vehicle';

@Component({
  selector: 'app-exemple',
  templateUrl: './exemple.component.html',
  styleUrls: ['./exemple.component.scss']
})
export class ExempleComponent implements OnInit {

  constructor(private api: GridOptionsService) { }
  columnDefs = [
    { headerName: 'Make', field: 'make' },
    { headerName: 'Model', field: 'model' },
    { headerName: 'Price', field: 'price' }
  ];

  rowData: Array<Vehicle> = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 }
  ];

  gridOptions = {
    columnDefs: this.columnDefs,
    rowData: this.rowData,
  };

  ngOnInit() {
    this.onGridReady();
  }
  onGridReady() {
    this.api.sizeColumnsToFit();
  }
}
