import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss']
})
export class CharacterCardComponent implements OnInit {
  
  @Input() character;
  
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  goToDetailsView(item) {
    console.log(item);
    this.router.navigateByUrl(`/dashboard/character/${ item.id }`);
  }
}
