import { Component,OnInit } from '@angular/core';
import { MenuService } from '../menu.service';
 
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  data:any[]=[]
  constructor(private cartService:MenuService){}
  ngOnInit(): void {
    this.getData()
  }
  getData(){
    this.data=this.cartService.GetCartData()
  }
  Incr(id:string){
    for(let i=0;i<this.data.length;i++){
      if(this.data[i].idCategory==id){
        this.data[i].quantity++
      }
    }
    localStorage.setItem("cart",JSON.stringify(this.data))
    this.getData()
  }
  Deac(id:string){
    for(let i=0;i<this.data.length;i++){
      if(this.data[i].idCategory==id){
        if(this.data[i].quantity==1){
          return
        }
        this.data[i].quantity--
      }
    }
    localStorage.setItem("cart",JSON.stringify(this.data))
    this.getData()
  }
  Delete(id:string){
    for(let i=0;i<this.data.length;i++){
      if(this.data[i].idCategory==id){
        this.data.splice(i,1)
      }
    }
    localStorage.setItem("cart",JSON.stringify(this.data))
    this.getData()
    alert("Item is deleted")
  }
}
