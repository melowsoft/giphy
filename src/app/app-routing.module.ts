import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ImageDetailComponent } from './components/image-detail/image-detail.component';

const routes: Routes = [
  { path: 'image', component: ImageDetailComponent },
  { path: '', component: AppComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
