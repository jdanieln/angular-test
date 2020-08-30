import { Component, OnInit } from '@angular/core';
import { ConfigService } from './../../../services/config.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  
  public characters: any;
  
  constructor(
    private configService: ConfigService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.getCharacters({});
  }
  async getCharacters(queryParams) {
    try {
      this.spinner.show();
      const resp: any = await this.configService.get('characters', queryParams);
      const { data } = resp;
      this.characters = data; 
    } catch (error) {
      console.error(error);
    } finally {
      this.spinner.hide();
    }
  }
  onKeyUpSearch(event) {
    const queryParams = event.target.value ? {
      name: event.target.value
    }: {};
    this.getCharacters(queryParams);
  }
}
