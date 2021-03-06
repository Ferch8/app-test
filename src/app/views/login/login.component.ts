import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent { 

  public form = {
    email:null,
    password: null
  };

  public error = null;

  constructor(private http:HttpClient){ }

  onSubmit(){
    console.log(this.form);
    return this.http.post('http://localhost:8000/api/login', this.form).subscribe(
      data => console.log(data),
      error => this.handleError(error)
    );
  }

  handleError(error){
    this.error = error.error.error;
  }

}
