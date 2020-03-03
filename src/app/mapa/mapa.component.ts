import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.sass']
})
export class MapaComponent implements OnInit {

  latitude = 50.297396;
  longitude = 19.135020;

  constructor() { }

  ngOnInit(): void {
  }

}
