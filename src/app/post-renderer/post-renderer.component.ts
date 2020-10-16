import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-renderer',
  templateUrl: './post-renderer.component.html',
  styleUrls: ['./post-renderer.component.css']
})
export class PostRendererComponent implements OnInit {

  content: string = "This is *markdown* content";

  constructor() { }

  ngOnInit(): void {
  }

}
