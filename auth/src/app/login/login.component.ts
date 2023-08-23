import { Component,OnInit } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:string=""
  password:string=""
  constructor(private userService:UserService,private router:Router){}
  ngOnInit(): void {
    
  }
  HandleSubmit(){
    this.userService.login(this.email,this.password).subscribe((data)=>{
      if(data.length>0){
        alert("Login succesful")
        localStorage.setItem("token","abcd1234")
        this.router.navigate(['/home'])
      }else{
        alert("Login failed")
      }
    })
  }
}
