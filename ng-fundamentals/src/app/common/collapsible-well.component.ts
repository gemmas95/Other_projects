import { Component } from '@angular/core';

@Component({
  selector: 'collapsible-well',
  template: `<div (click)="toogleContent()" class="well pointable">
    <h4>
      <ng-content select="[well-title]"></ng-content>
    </h4>
    <ng-content *ngIf="visible" select="[well-body]"></ng-content>
  </div>`,
})
export class CollapsibleWellComponent {
  visible: boolean = true;

  toogleContent() {
    this.visible = !this.visible;
  }
}
