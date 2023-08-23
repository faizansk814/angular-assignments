import { Component,OnInit} from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  name:string=""
  email:string=""
  password:string=""
  ngOnInit(): void {
    
  }
  constructor(private userService:UserService,private router:Router){}
  HandleSubmit(){
    let obj:User={
      name:this.name,
      email:this.email,
      password:this.password
    }
    console.log(obj)
    this.userService.signup(obj).subscribe(()=>{
      alert('Registration succesful')
      this.router.navigate(['/login'])
    })
  }
}
