import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ImageFormComponent } from './image-form/image-form.component';
import { ResumeListingComponent } from './resume-listing/resume-listing.component';
const routes: Routes = [
  {path: '', component: AboutComponent},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'imageform', component: ImageFormComponent},
  {path: 'list',component: ResumeListingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
