import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Campaign } from '../../../assets/campaigns/types';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class WhrpService {

  private campaign: Observable<Campaign>;

  constructor(private httpService: HttpClient) {
    this.initialiseData();
  }

  getCampaign(): Observable<Campaign> {
    return this.campaign;
  }

  private initialiseData(): void {
    this.campaign = this.fetchCampaign();
  }

  private fetchCampaign(): Observable<Campaign> {
    return this.httpService.get('/assets/campaigns/whrp.txt', { responseType: 'text' })
      .pipe(
        map((text: string) => {
          return (text as unknown) as Campaign;
        })
      );
  }
}
