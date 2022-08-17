import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  //initial username
  username: string='';

  //variable to able or disable the button
  isDisabled: boolean=true;

  //activate or disactivate button if username is empty
  activateButton(){
    if(this.username!==''){
      this.isDisabled=false;
    } else{
      this.isDisabled=true;
    }
  }

  //reset the user
  resetUser(){
    this.username='';
    this.isDisabled=true;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
