import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;

  @Output() ingredient = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit() {
  }

  onAddItem() {
   const name = this.nameInput.nativeElement.value;
   const amount = this.amountInput.nativeElement.value;
   this.ingredient.emit({name , amount});
  }
}
