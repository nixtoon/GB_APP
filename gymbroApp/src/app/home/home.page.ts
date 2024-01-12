import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  selectedTab: any;

  constructor() {}


  ngOnInit(): void {
    
  }

  setCurrentTab(event: any): void {
    this.selectedTab = event.tab;
  }

}
