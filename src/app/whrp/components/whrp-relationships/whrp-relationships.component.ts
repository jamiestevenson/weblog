import { AfterContentInit, AfterViewInit, Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import ForceGraph from './ForceGraph.js';
import { WhrpService } from '../../services/whrp.service';
import { SimulationNodeDatum } from 'd3';
import { Relationship } from '../../../../../docs/assets/campaigns/types';

@Component({
  selector: 'app-whrp-relationships',
  templateUrl: './whrp-relationships.component.html',
  styleUrls: [
    './whrp-relationships.component.css',
    '../../../app.component.css',
  ],
})
export class WhrpRelationshipsComponent implements AfterViewInit {

  private width = 900;
  private height = 600;

  // TODO - figure out wht is wrong with SVG output format
  // Ref: https://www.d3indepth.com/force-layout/

  constructor(public whrpService: WhrpService) { }

  ngAfterViewInit(): void {

    let xScale = d3.scaleLinear().domain([0, 1]).range([0, 900]);
    let nodes: SimulationNodeDatum[] = [];
    let links = [];
    this.whrpService.getCharacterGraph().subscribe(
      (cs) => {
        cs.nodes.map( character => nodes.push({
          name: character.name,
          radius: Math.random() * 25,
          value: Math.random()
        } as SimulationNodeDatum));
        cs.links.map(
            (link) => links.push({source: link.source, target: link.destination })
        );
      }
    );

    const simulation = d3.forceSimulation(nodes)
    .force('charge', d3.forceManyBody().strength(-200))
    .force('center', d3.forceCenter(this.width / 2, this.height / 2))
    .force('link', d3.forceLink().links(links))
    .on('tick', (): void => {
        var linksUpdate = d3.select('.links')
        .selectAll('line')
        .data(links)
        .join('line')
         // @ts-ignore
        .attr('x1', dx1 => dx1.source.x)
         // @ts-ignore
        .attr('y1', dy1 => dy1.source.y)
        // @ts-ignore
        .attr('x2', dx2 => dx2.target.x)
        // @ts-ignore
        .attr('y2', dy2 => dy2.target.y);

        let labelUpdate = d3.select('.nodes')
        .selectAll('circle')
        .data(nodes)
        .join('circle') // this will need to be changed to a 'g' element with a circle and text within
        // @ts-ignore
        .attr('cx', d => d.x )
        // @ts-ignore
        .attr('cy', e => e.y )
        // @ts-ignore
        .attr('r', 5);

        let nodeUpdate = d3.select('.nodes')
        .selectAll('text')
        .data(nodes)
        .join('text') // this will need to be changed to a 'g' element with a circle and text within
         // @ts-ignore
        .text(dn => dn.name)
        // @ts-ignore
        .attr('x', d => d.x + 10 )
        // @ts-ignore
        .attr('y', e => e.y - 15 )
        // @ts-ignore
        .attr('dy', f => 10);
    });
  }

  // YOU ARE HERE - see https://www.d3indepth.com/force-layout/ rework to TS

}
