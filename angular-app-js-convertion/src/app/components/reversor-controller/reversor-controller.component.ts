import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reversor-controller',
  templateUrl: './reversor-controller.component.html',
  styleUrls: ['./reversor-controller.component.scss']
})
export class ReversorControllerComponent implements OnInit {
  name: string;
  constructor() { }

  ngOnInit() {
    this.name = 'Wolrd';
  }
  reverseName() {
    this.name += `!`;
    this.name = this.name.split('').reverse().join('');
  }

}
