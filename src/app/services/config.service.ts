import { Injectable } from '@angular/core';
import { Md5 } from 'ts-md5/dist/md5';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private env = environment;
  
  constructor(
    private httpClient: HttpClient
  ) { }

  private generateMD5(ts, privateKey, publicKey) {
    const md5 = new Md5();
    return md5.appendStr(`${ts}${privateKey}${publicKey}`).end()
  }
  
  public async get(entity: string, params: object) {
    const ts = new Date().getTime();
    const md5 = this.generateMD5(ts, this.env.privateKey, this.env.publicKey)
    const parameters = {
      ts,
      apikey: this.env.publicKey,
      hash: md5,
      ...params
    };
    const qParams = this.buildQueryParams(parameters);
    return this.httpClient.get(`${this.env.baseUrl}/${entity}?${qParams}`).toPromise();
  }

  private buildQueryParams(parameters) {
    return Object.keys(parameters)
    .map(key => `${key}=${parameters[key]}`)
    .join('&');
  }
}
