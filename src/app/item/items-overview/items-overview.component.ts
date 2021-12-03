
import { Component, OnInit } from '@angular/core';
import {Item} from "../../model/Item";
import {ItemService} from "../../service/item.service";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-items-overview',
  templateUrl: './items-overview.component.html',
  styleUrls: ['./items-overview.component.css']
})
export class ItemsOverviewComponent implements OnInit {

  items: Item[] = [];

  constructor(private itemService: ItemService,
              private formBuilder: FormBuilder) {
  }


  ngOnInit(): void {
    this.getItems();
  }

  getItems(): void {
    this.itemService.getItems()
      .subscribe(items => this.items = items);
  }





}
