import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'modal',
  templateUrl: 'modal.component.html',
  styleUrls: [],
  animations: [
    trigger('overlay', [
      transition('void => *', [
        style({
          opacity: 0
        }),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({
          opacity: 0
        }))
      ])
    ]),

  ]
})
export class ModalComponent {
  @Input() closable = true;
  @Input() visible = false;
  @Input() size: string;

  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() {
  }

  ngOnChanges(changes: SimpleChanges) {

    if (changes['visible']) {
      if (changes.visible.currentValue) {

      } else {

      }
    }
  }

  close() {
    this.visible = false;
    this.visibleChange.emit(this.visible);
  }

}