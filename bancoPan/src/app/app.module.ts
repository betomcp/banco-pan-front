import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SingInComponent } from './pages/sing-in/sing-in.component';
import { TitleComponent } from './components/title/title.component';
import { PersonalData1Component } from './pages/personal-data1/personal-data1.component';
import { PersonalData2Component } from './pages/personal-data2/personal-data2.component';
import { AddressComponent } from './pages/address/address.component';
import { InputNameComponent } from './components/input-name/input-name.component';
import { GoAndBackComponent } from './components/go-and-back/go-and-back.component';
import { PersonalDataFormOneComponent } from './components/personal-data-form-one/personal-data-form-one.component';
import { PersonalDataFormTwoComponent } from './components/personal-data-form-two/personal-data-form-two.component';
import { AddresFormComponent } from './components/addres-form/addres-form.component';
import { SubmitComponent } from './components/submit/submit.component';
import { GameComponent } from './components/game/game.component';

@NgModule({
  declarations: [
    AppComponent,
    SingInComponent,
    TitleComponent,
    PersonalData1Component,
    PersonalData2Component,
    AddressComponent,
    InputNameComponent,
    GoAndBackComponent,
    PersonalDataFormOneComponent,
    PersonalDataFormTwoComponent,
    AddresFormComponent,
    SubmitComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
