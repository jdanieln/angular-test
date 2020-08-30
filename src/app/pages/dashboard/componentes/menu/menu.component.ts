import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public items: NbMenuItem[] = [
    {
      title: 'dashboard',
      icon: 'layout-outline',
      link: 'dashboard'
    },
    {
      title: 'dashboard',
      icon: 'layout-outline',
      link: 'dashboard'
    }
   ];
  constructor() { }

  ngOnInit(): void {
  }

}
