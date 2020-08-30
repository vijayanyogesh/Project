import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @Output() sendIng = new EventEmitter<{name :string,amount:number}> ();
  @Output() sendIng1 = new EventEmitter<Ingredient> ();

  @ViewChild('ingName',{static : true}) ingName: ElementRef;
  @ViewChild('ingAmount',{static : true}) ingAmount: ElementRef;

  addItem(){
    this.sendIng.emit({name : this.ingName.nativeElement.value, amount:this.ingAmount.nativeElement.value});
    const newIng = new Ingredient(this.ingName.nativeElement.value,this.ingAmount.nativeElement.value)
    //this.sendIng1.emit(newIng);

  }



  constructor() { }

  ngOnInit(): void {
  }

}
