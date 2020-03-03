import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule, routingComponents } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { AgmCoreModule} from '@agm/core';



@NgModule({
  declarations: [
    HomeComponent,
    routingComponents,
    HeaderComponent,
    NavbarComponent,
    BodyComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDjtN3LbwfWOOpD1mqYGZcU6xNCcLHuxi8'
    })
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
