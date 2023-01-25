import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppGaurdService } from '../app.gaurd.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private routes : Router , private auth : AppGaurdService ) { }

  ngOnInit() {
  }
  onClick(value : number){
    this.routes.navigate(["/servers",value,'edit'],{queryParams : {allowEdit :'1'},fragment:'loadded'});
  }
  onsignIn(){
    this.auth.isloggedIn();
  }
  onSigninOut(){
    this.auth.isloggedOut();
  }

}
