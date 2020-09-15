import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingService } from '../shopping.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit,OnDestroy {

  @ViewChild('f',{static:false}) dlform : NgForm;
  subs: Subscription;
  editMode = false;
  editedIndex:number;
  editItem : Ingredient;

  // @Output() sendIng = new EventEmitter<{name :string,amount:number}> ();
  // @Output() sendIng1 = new EventEmitter<Ingredient> ();

  // @ViewChild('ingName',{static : true}) ingName: ElementRef;
  // @ViewChild('ingAmount',{static : true}) ingAmount: ElementRef;

  addItem(form: NgForm){
    // this.sendIng.emit({name : this.ingName.nativeElement.value, amount:this.ingAmount.nativeElement.value});
    // const newIng = new Ingredient(this.ingName.nativeElement.value,this.ingAmount.nativeElement.value)
    //this.sendIng1.emit(newIng);
    const value = form.value;
    if(this.editMode){
      this.shoppingService.updateIng(this.editedIndex,{name:value.name, amount:value.amount})
      
    }else{

      this.shoppingService.addItem({name:value.name, amount:value.amount});

    }
    
    form.reset();
    this.editMode = false;
  }

  

  constructor(private shoppingService:ShoppingService) { }

  ngOnInit(): void {

    this.subs = this.shoppingService.startedEditing
                  .subscribe(
                    (index:number) =>{
                      this.editMode = true;
                      this.editedIndex = index;
                      this.editItem = this.shoppingService.getIngredientEdit(index);
                      this.dlform.setValue({
                        name:this.editItem.name,
                        amount:this.editItem.amount
                      })
                    }
                  )
  }

  ngOnDestroy(){

    this.subs.unsubscribe();

  }

  onClear(){
    this.dlform.reset();
    this.editMode = false;
  }

  onDelete(){
    this.shoppingService.deleteIng(this.editedIndex);
    this.onClear();
  }

}
