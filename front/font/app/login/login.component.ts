import { Component,OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import{PublicService} from '../services/public.service';
import{first} from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(private publicService : PublicService ) {
    this.myform = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    });
  }
  ngOnInit(): void {
    
  }
  myform: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  ngOnSubmit(){
    //console.warn(this.myform.value);
    this.publicService.login(this.f['username'].value, this.f['password'].value).pipe(first()).subscribe(data => {
      console.log(data);
    });
  }
  get f(){
    return this.myform.controls;
  }
}

