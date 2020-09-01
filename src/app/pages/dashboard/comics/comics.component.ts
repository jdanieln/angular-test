import { Component, OnInit } from '@angular/core';
import { ConfigService } from './../../../services/config.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.scss']
})
export class ComicsComponent implements OnInit {
  
  public comics: any;
  public selectedItem = undefined;

  constructor(
    private configService: ConfigService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.getComics({});
  }
  async getComics(queryParams) {
    try {
      this.spinner.show();
      const resp: any = await this.configService.get('comics', queryParams);
      const { data } = resp;
      this.comics = data;
    } catch (error) {
      console.error(error);
    } finally {
      this.spinner.hide();
    }
  }
  onKeyUpSearch(event) {
    const queryParams = event.target.value ? {
      title: event.target.value
    }: {};
    this.getComics(queryParams);
  }
  onKeyUpSearchIssue(event) {
    const queryParams = event.target.value ? {
      issueNumber: Number(event.target.value)
    }: {};
    this.getComics(queryParams);
  }

  selectedFormatChange(event) {
    const queryParams = event ? {
      format: event
    }: {};
    this.getComics(queryParams);
  }
}
