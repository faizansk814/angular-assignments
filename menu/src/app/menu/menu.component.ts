import { Component, OnInit } from '@angular/core';
import { Menu } from '../menu.model';
import { MenuService } from '../menu.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

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
}
