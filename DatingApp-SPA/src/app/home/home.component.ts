import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registerMode = false;
  values: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getvalues();
  }
  
  registerToggle(){
    this.registerMode = !this.registerMode;
  }

  getvalues(){
    this.http.get('https://localhost:44343/api/values').subscribe( Response => {
     this.values = Response;
    }, error => {
      console.log(error);
    });
  }
}
