import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfigService } from 'src/app/services/config.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-comics-detail',
  templateUrl: './comics-detail.component.html',
  styleUrls: ['./comics-detail.component.scss']
})
export class ComicsDetailComponent implements OnInit {
  private comicId: number = 0;
  public comic: any;

  constructor(
    private route: ActivatedRoute,
    private configService: ConfigService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.comicId = Number(params.get('comicId'));
      this.getComic();
    });
  }
  private async getComic() {
    try {
      this.spinner.show();
      const resp: any = await this.configService.get(`comics/${this.comicId}`, {});
      const { data: { results } } = resp;
      this.comic = results[0]; 
      console.log(this.comic);
    } catch (error) {
      console.error(error);
    } finally {
      this.spinner.hide();
    }
  }
}
