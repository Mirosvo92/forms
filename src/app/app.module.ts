import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { CodeDrivenComponent } from './code-driven/code-driven.component';
import { FromServerComponent } from './from-server/from-server.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ListFormsComponent } from './list-forms/list-forms.component';
import {UserServece} from './shared/user-servece';
import {HttpClientModule} from '@angular/common/http';
import {OnlyEnglishDirective} from './shared/onlyEnglish.directive';
import {AppRoutingModule} from './app-routing.module';
import {CoincidencePasswordDirective} from './shared/coincidence.password';


@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenComponent,
    CodeDrivenComponent,
    FromServerComponent,
    ListFormsComponent,
    OnlyEnglishDirective,
    CoincidencePasswordDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [UserServece],
  bootstrap: [AppComponent]
})
export class AppModule { }
