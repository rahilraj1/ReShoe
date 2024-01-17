import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { CartComponent } from './cart/cart.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomeComponent } from './home/home.component';
import { StoryComponent } from './story/story.component';
import { LookbookComponent } from './lookbook/lookbook.component';
import { SaleComponent } from './sale/sale.component';
import { CollectionsComponent } from './collections/collections.component';
import { Cart2Component } from './cart2/cart2.component';
import { MenComponentComponent } from './men-component/men-component.component';
import { WomenComponent } from './women/women.component';
const routes: Routes = 
[
  {path:'',component:HomeComponent},
  {path:'contact',component:ContactComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'story',component:StoryComponent},
  {path:'lookbook',component:LookbookComponent},
  {path:'sale',component:SaleComponent},
  {path:'collection',component:CollectionsComponent},
  {path:'maincart',component:Cart2Component},
  {path:'men',component:MenComponentComponent},
  {path:'women',component:WomenComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
