import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GridOptionsService {

  constructor(public http: HttpClient) { }
  sizeColumnsToFit() {
    return 'bran new Column';
  }
  async getRows(rowsParams, rowData) {
    return await this.http.get(environment.url);
  }
}
