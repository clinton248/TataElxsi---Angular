import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";
import { environment } from 'src/environments/environment';
import {first, map} from 'rxjs/operators';
import { ConnectionService } from '../services/connection.service';
import { UserDetails } from '../models/StructureClass';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public body:any;
  public LoginError :any;
  public LoadingSpinner = false;
  public ServerError=false;
  public userdetails: UserDetails[] | any;

  
  constructor(private router:Router, public connectionService:ConnectionService,public http:HttpClient) { 
  
  }

  ngOnInit(): void {
   
  }

  move_to_register(){
    this.router.navigateByUrl('/register');
  }
  move_to_forgot_password(){
    this.router.navigateByUrl('/forgot-password');
  
  }
  
  onSubmit(loginForm:NgForm){
  this.LoadingSpinner=true;
  var username=loginForm.controls.UserName.value;
  var password=loginForm.controls.Password.value;


  this.connectionService
      .login(username, password)
      .pipe(first())
      .subscribe({
        next: data => {
          this.LoginError=false;
          this.ServerError=false;
        
          setTimeout(()=>{
            this.LoadingSpinner=false;
            this.router.navigateByUrl('/dashboard');

          }, 3000)
          
          
        },
        error: error => {
          console.log(error)
          if(error.status==404){
            this.LoadingSpinner=false;
            this.LoginError=false;
          this.ServerError=true;
          
          }
          else{
          this.ServerError=false; 
          this.LoadingSpinner=false;
          this.LoginError=error.statusText;
          }
        }
    });
     
 
    
  }

}
