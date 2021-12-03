import { Component, OnInit } from '@angular/core';
import {Item} from "../../model/Item";
import {ItemService} from "../../service/item.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'app-item-update',
  templateUrl: './item-update.component.html',
  styleUrls: ['./item-update.component.css']
})
export class ItemUpdateComponent implements OnInit {

  item : Item | undefined;

  constructor(private itemService: ItemService,
              private route: ActivatedRoute,
              private location: Location,
              private router: Router) { }



  ngOnInit(): void {
    this.getItem();
  }

  getItem(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.itemService.getItem(id)
      .subscribe(item => this.item = item);
  }


  save(): void {
    if(this.item){
      this.itemService.updateItem(this.item)
        .subscribe(()=> this.goBack())
    }
  }

  goBack(): void {
    this.location.back();
  }
}
