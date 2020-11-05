import { Component, OnInit } from '@angular/core';
import { TableTitleData } from 'src/app/models/table-title-data';
import { Vehicle } from 'src/app/models/vehicle';
import { GridOptionsService } from 'src/app/services/grid-options.service';

@Component({
  selector: 'app-grid-page',
  templateUrl: './grid-page.component.html',
  styleUrls: ['./grid-page.component.scss']
})
export class GridPageComponent implements OnInit {
  constructor(private api: GridOptionsService) { }
  columnDefs = [
    new TableTitleData('Make', 'make'),
    new TableTitleData('Model', 'model'),
    new TableTitleData('Price', 'price')
  ];

  rowData: Array<Vehicle> = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 }
  ];
  autoGroupColumnDef = {
    cellRenderer: 'agGroupCellRenderer'
  };
  defaultColDef = {
    sortable: true,
    filter: true,
    resizable: true,
    angularCompileRow: true,
    onGridReady: (params) => {
      params.api.sizeColumnsToFit();
    }
  };

  ngOnInit() {
  }


}
