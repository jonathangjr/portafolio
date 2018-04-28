import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Angular Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Angular maps
import { AgmCoreModule } from '@agm/core';

//graficos
import { ChartsModule } from 'ng2-charts';

//app router
import { APP_ROUTING } from "./app.routes";

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';

import { HabilidadesComponent, ProyectosComponent, SobreMiComponent, 
         ContactemeComponent, HomeComponent, FooterComponent, NavbarComponent 
        } from "./componentes/index.components";
import { importExpr } from '@angular/compiler/src/output/output_ast';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ProyectosComponent,
    SobreMiComponent,
    ContactemeComponent,
    HabilidadesComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    ChartsModule,
    BrowserAnimationsModule,
    MaterialModule,
    AgmCoreModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDELYUzvfZhl5xg_re6OCeEPyZvRlqqusk'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
