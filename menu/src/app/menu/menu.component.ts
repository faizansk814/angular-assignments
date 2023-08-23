import { Component, OnInit } from '@angular/core';
import { Menu } from '../menu.model';
import { MenuService } from '../menu.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  arr :any[] = JSON.parse(localStorage.getItem("cart") || '[]');

  foods: Menu[] = []
  constructor(private menuService:MenuService){}
  ngOnInit(): void {
    this.getData()
  }
  getData(){
    this.menuService.GetData().subscribe((data)=>{
      this.foods=data.categories
    })
  }
  HandleClick(food:Menu){
    for(let i=0;i<this.arr.length;i++){
      if(this.arr[i].idCategory==food.idCategory){
        alert("Product already in cart")
        return
      }
    }
    this.arr.push({...food,quantity:1})
    localStorage.setItem("cart",JSON.stringify(this.arr))
    alert("Product added to cart")
  }
}
