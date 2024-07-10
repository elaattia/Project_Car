import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import{first} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import { DataService } from './data.service'; // Path to your service
import{PublicService} from './services/public.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'first-app';
  currentRoute: string = '';
  msg:any;
  obj1:any;
  obj:any;
  constructor(private pService : PublicService,private router: Router, private http:HttpClient,private dataService: DataService) {}

  
  data: any[] = [];

  ngOnInit(): void {
    this.obj=this.http.get("http://127.0.0.1:8000/new/").subscribe(data=>this.obj=data)
    this.obj1=this.http.get("http://127.0.0.1:8000/").subscribe(data=>this.obj1=data)
    this.showMessage();
  }
  
  showMessage(){
    this.pService.getMessange().subscribe(data=>{
      this.msg=data,
      console.log(this.msg);
    });
  }
  logout(){
    this.pService.logout();
  }
}
