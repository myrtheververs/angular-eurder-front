import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Location} from "@angular/common";
import {ItemService} from "../../service/item.service";
import {Item} from "../../model/Item";
import {FormBuilder, FormControl, FormGroup, Validator, Validators} from "@angular/forms";

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-add.component.html',
  styleUrls: ['./item-add.component.css']
})
export class ItemAddComponent implements OnInit {

  item! : Item ;

  maxChars = 255;
  role = '';
  chars = 0;


  constructor(private route: ActivatedRoute,
              private location: Location,
              private router: Router,
              private itemService: ItemService,
              private formBuilder: FormBuilder) { }


  createItemForm = this.formBuilder.group(
    {
      name: '',
      description: '',
      price: '',
      amountOfStock: ''
    }
  )

  ngOnInit(): void {
    this.createItemForm = new FormGroup({
      name: new FormControl(this.item.name, [
        Validators.required
      ]),
      description: new FormControl(this.item.description, [
        Validators.required,
        Validators.maxLength(255)
      ]),
      price: new FormControl(this.item.price, [
        Validators.required,
        Validators.min(0)
      ]),
      amountOfStock: new FormControl(this.item.amountOfStock, [
        Validators.required,
        Validators.min(0)
      ])
    })
  }

  get name () {
    return this.createItemForm.get('name');
  }
  get description () {
    return this.createItemForm.get('description');
  }
  get price () {
    return this.createItemForm.get('price');
  }
  get amountOfStock () {
    return this.createItemForm.get('amountOfStock');
  }


  onSubmit() : void {
    this.itemService.addItem(this.createItemForm.value)
      .subscribe(result => {
          console.warn('Item has been added', this.createItemForm.value)
          this.createItemForm.reset();
          this.getItem();
        }
      )
  }


  getItem(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.itemService.getItem(id)
      .subscribe(item => this.item = item);
  }

  goBack(): void {
    this.location.back();
  }


  onChange() {

  }



}
