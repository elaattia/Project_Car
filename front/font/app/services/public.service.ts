import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http'
import { map } from 'rxjs/operators';

const csrfToken = 'xyaSJfsXywrKkWZDuvqSEGIyFkQrDacY'	|| '';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'X-CSRFToken': csrfToken
  })
};

@Injectable({
  providedIn: 'root'
})
export class PublicService {
  
  api_url='http://localhost:8000/';
  constructor(private http:HttpClient) { }
  
  getMessange(){
    const csrfToken = 'xyaSJfsXywrKkWZDuvqSEGIyFkQrDacY'	|| ''; // Utilisation d'une valeur par défaut si le jeton CSRF est undefined
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'X-CSRFToken': csrfToken
    })
  };console.log("hi");
    return this.http.get(this.api_url, httpOptions);

  }
  
  login(username:String , password: String){
    
    return this.http.post<any>(this.api_url+'accounts/api/auth/', 
      {username,password},httpOptions).pipe(
        map( user=>{
          if (user && user.token){
            localStorage.setItem("currentUser",JSON.stringify(user));
            
          }
          return user;
        }

        )
      );
  }

  logout(){
    localStorage.removeItem('currentUser');
  }
}

  
    