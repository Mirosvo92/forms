import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ListFormsComponent} from './list-forms/list-forms.component';
import {CodeDrivenComponent} from './code-driven/code-driven.component';
import {FromServerComponent} from './from-server/from-server.component';
import {TemplateDrivenComponent} from './template-driven/template-driven.component';


const itemRoutes: Routes = [
  { path: 'code-driven', component: CodeDrivenComponent},
  { path: 'from-server', component: FromServerComponent},
  { path: 'template-driven', component: TemplateDrivenComponent}
];

const appRoutes: Routes = [
  { path: '', component: ListFormsComponent, children: itemRoutes}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})


export class AppRoutingModule {}
