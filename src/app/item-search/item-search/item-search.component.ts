import { Component, OnInit } from '@angular/core';
import {ItemService} from "../../service/item.service";
import {debounce, debounceTime, distinctUntilChanged, Observable, Subject, switchMap} from "rxjs";
import {Item} from "../../model/Item";


@Component({
  selector: 'app-item-search',
  templateUrl: './item-search.component.html',
  styleUrls: ['./item-search.component.css']
})
export class ItemSearchComponent implements OnInit {
  items$!: Observable<Item[]>;

  private searchTerms = new Subject<string>();

  constructor(private itemService: ItemService) { }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.items$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.itemService.searchItems(term)),
    );
  }



}
