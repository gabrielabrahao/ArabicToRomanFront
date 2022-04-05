
import { ConverterCrudComponent } from './views/client-crud/converter-crud.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    component: ConverterCrudComponent
  },

  {
    path: "converter",
    component: ConverterCrudComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
