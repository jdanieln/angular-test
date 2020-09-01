import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comic-card',
  templateUrl: './comic-card.component.html',
  styleUrls: ['./comic-card.component.scss']
})
export class ComicCardComponent implements OnInit {
  
  @Input() comic;
  
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  goToDetailsView(item) {
    console.log(item);
    this.router.navigateByUrl(`/dashboard/comic/${ item.id }`);
  }
}
