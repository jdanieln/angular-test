import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfigService } from 'src/app/services/config.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit {
  private characterId: number = 0;
  public character: any;

  constructor(
    private route: ActivatedRoute,
    private configService: ConfigService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.characterId = Number(params.get('characterId'));
      this.getCharacter();
    });
  }
  private async getCharacter() {
    try {
      this.spinner.show();
      const resp: any = await this.configService.get(`characters/${this.characterId}`, {});
      const { data: { results } } = resp;
      this.character = results[0]; 
      console.log(this.character);
    } catch (error) {
      console.error(error);
    } finally {
      this.spinner.hide();
    }
  }
}
