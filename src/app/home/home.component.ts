import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  title = 'AMIW projekt';

  constructor(private titleService: Title, private meta: Meta) {
    titleService.setTitle('');

    meta.addTag({name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no'}, true);
    meta.addTag({name: 'description', content: ''}, true);
    meta.addTag({name: 'author', content: 'Synowiec'}, true);

  }

  ngOnInit(): void {
  }

}
