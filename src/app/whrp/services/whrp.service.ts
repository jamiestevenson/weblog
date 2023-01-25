import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Campaign, Character } from '../../../assets/campaigns/types';
import campaign from '../../../assets/campaigns/whrp';
import { map } from 'rxjs/operators';
import { CharacterGraph } from '../interfaces/charactergraph.interface';

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

  getCharacters(): Observable<Character[]> {
    return this.campaign.pipe(
      map((c: Campaign) => c.cast)
    );
  }

  getCharacterGraph(): Observable<CharacterGraph> {
    return this.campaign.pipe(
      map((cmp: Campaign) => {
        const nodes = cmp.cast.map(c => ({name: c.name}));
        const links = [];
        cmp.cast.forEach(
          (person, personIndex) => (person.relationships ?? []).forEach(
            relationship => relationship.who.forEach(
              who => (links.push({
                source: personIndex,
                destination: nodes.findIndex(node => node.name === who)
              }))
            )
          )
        );
        return {nodes, links};
      })
    );
  }

  private initialiseData(): void {
    this.campaign = this.fetchCampaign();
  }

  private fetchCampaign(): Observable<Campaign> {
    return of(campaign);
  }
}
