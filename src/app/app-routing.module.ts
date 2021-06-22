import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeroComponent } from './hero/hero.component';
import { InfoComponent } from './info/info.component';


const routes: Routes = [
  { path: '', component: HeroComponent} ,
  { path: 'experience', component: InfoComponent},
  { path: 'connect', component: FooterComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
