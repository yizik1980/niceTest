import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-app-js-convertion';
  routes: Routes;
  constructor(private router: Router) {
  }
  ngOnInit(): void {
    this.routes = this.router.config;
  }
}
