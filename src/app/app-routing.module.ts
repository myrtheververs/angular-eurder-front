
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ItemsOverviewComponent} from "./item/items-overview/items-overview.component";
import {RouterModule, Routes} from "@angular/router";
import {ItemDetailComponent} from "./item/item-detail/item-detail.component";
import {ItemAddComponent} from "./item/item-add/item-add.component";
import {ItemUpdateComponent} from "./item/item-update/item-update.component";

const routes: Routes = [
  { path: '', component: ItemsOverviewComponent },
  { path: 'items/:id', component: ItemDetailComponent},
  { path: 'items/new/add', component: ItemAddComponent},
  { path: 'items/:id/edit', component: ItemUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
