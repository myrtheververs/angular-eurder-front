import { Component, OnInit } from '@angular/core';
import {Item} from "../../model/Item";
import {ItemService} from "../../service/item.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

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

  goBack(): void {
    this.location.back();
  }

}
