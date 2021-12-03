
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ItemsOverviewComponent} from "./item/items-overview/items-overview.component";
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { StockStatusPipe } from './pipes/stock-status.pipe';
import { ItemSearchComponent } from './item-search/item-search/item-search.component';
import {ItemDetailComponent} from "./item/item-detail/item-detail.component";
import { ItemAddComponent} from "./item/item-add/item-add.component";
import { ItemUpdateComponent } from './item/item-update/item-update.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemsOverviewComponent,
    StockStatusPipe,
    ItemSearchComponent,
    ItemDetailComponent,
    ItemAddComponent,
    ItemUpdateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
