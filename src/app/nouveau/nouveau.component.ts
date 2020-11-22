import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nouveau',
  templateUrl: './nouveau.component.html',
  styleUrls: ['./nouveau.component.css']
})
export class NouveauComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public myFunc(event: Event): void {
    console.log(event);

  }

}
