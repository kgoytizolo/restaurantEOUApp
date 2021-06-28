import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  readonly title : string;

  constructor() { 
    this.title = 'The Restaurant at the End of the Universe';
  }

  ngOnInit(): void {
  }

}
