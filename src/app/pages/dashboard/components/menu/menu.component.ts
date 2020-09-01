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
      link: '/dashboard'
    },
    {
      title: `marvel's`,
      icon: 'film-outline',
      children:  [
        {
          title: 'characters',
          icon: 'people-outline',
          link: 'characters'
        },
        {
          title: 'comics',
          icon: 'book-open-outline',
          link: 'comics'
        }
      ]
    }
   ];
  constructor() { }

  ngOnInit(): void {
  }

}
