import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchComponent } from './search/search.component';
import { AdminComponent } from './admin/admin.component';
import { CreateComponent } from './admin/create/create.component';
import { EditComponent} from './admin/edit/edit.component';

const routes: Routes = [
  { path: '', component: SearchComponent},
  { path: 'admin', component: AdminComponent},
  { path: 'admin/create', component: CreateComponent},
  { path: 'admin/edit/:id', component: EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
