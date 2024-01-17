import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';
import { StoryComponent } from './story/story.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { ShoesmadeComponent } from './shoesmade/shoesmade.component';
import { BestsellerComponent } from './bestseller/bestseller.component';
import { MenWomenComponent } from './men-women/men-women.component';
import { NewarrivalsComponent } from './newarrivals/newarrivals.component';
import { StampComponent } from './stamp/stamp.component';
import { ReviewComponent } from './review/review.component';
import { BetterpeopleComponent } from './betterpeople/betterpeople.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import { FooterComponent } from './footer/footer.component';
import { LookbookComponent } from './lookbook/lookbook.component';
import { SaleComponent } from './sale/sale.component';
import { CollectionsComponent } from './collections/collections.component';
import {HttpClientModule} from '@angular/common/http';
import { QuickViewComponent } from './quick-view/quick-view.component';
import { Cart2Component } from './cart2/cart2.component'
import { NgxUiLoaderModule } from "ngx-ui-loader";
import { MenComponentComponent } from './men-component/men-component.component';
import { WomenComponent } from './women/women.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutusComponent,
    ContactComponent,
    StoryComponent,
    CartComponent,
    HomeComponent,
    ShoesmadeComponent,
    BestsellerComponent,
    MenWomenComponent,
    NewarrivalsComponent,
    StampComponent,
    ReviewComponent,
    BetterpeopleComponent,
    FooterComponent,
    LookbookComponent,
    SaleComponent,
    CollectionsComponent,
    QuickViewComponent,
    Cart2Component,
    MenComponentComponent,
    WomenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,MatDialogModule,MatSelectModule,
    HttpClientModule,NgxUiLoaderModule,
    BrowserAnimationsModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
