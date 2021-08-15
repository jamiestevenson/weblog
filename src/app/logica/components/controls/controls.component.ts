import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css']
})
export class ControlsComponent {

  @Input()
  lowBits?: number;
  @Input()
  highBits?: number;
  @Input()
  level?: string;

  isRunning = false;

  @Output()
  loadClick: EventEmitter<void> = new EventEmitter<void>();
  @Output()
  runClick: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }


  handleLoadClick(): void {
    this.loadClick.emit();
  }

  handleRunClick(): void {
    this.isRunning = !this.isRunning;
    this.runClick.emit(this.isRunning);
  }

  get runningLabel(): string {
    return (this.isRunning) ? 'Pause' : 'Continue';
  }

}
