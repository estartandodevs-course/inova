import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainPageComponent } from './container/main-page/main-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { NavComponent } from './components/nav/nav.component';
import { InputComponent } from './components/input/input.component';
import { TextareaComponent } from './components/textarea/textarea.component';
import { ButtonComponent } from './components/button/button.component';
import { SectionContactComponent } from './components/section-contact/section-contact.component';
import { SectionQuemsomosComponent } from './components/section-quemsomos/section-quemsomos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainPageComponent,
    FooterComponent,
    CarouselComponent,
    NavComponent,
    InputComponent,
    TextareaComponent,
    ButtonComponent,
    SectionContactComponent,
    SectionQuemsomosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
