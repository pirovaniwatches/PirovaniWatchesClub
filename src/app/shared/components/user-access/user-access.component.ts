import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-access',
  templateUrl: './user-access.component.html',
  styleUrls: ['./user-access.component.scss']
})
export class UserAccessComponent implements OnInit {

  message: string = "Welcome, Big Manager";
  lastAccess: string = "Last access was 04/12/2018 at 09:49PM";
  urlImage: string = "http://www.pirovaniwatches.com/assets/imgs/profile/gerentao-pw-site-profile.png"

  constructor() { }

  ngOnInit() {
  }

}
