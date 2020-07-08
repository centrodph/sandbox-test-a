import { Component } from "@angular/core";

@Component({
  selector: "test-data",
  template: `
    <div>
      <ul>
        <li>
          1
          <ng-container
            *ngIf="canBeGroup(1) === 1; then tf; else tp"
          ></ng-container>
        </li>
        <li>
          3
          <ng-container
            *ngIf="canBeGroup(3) === -1; then tf; else tp"
          ></ng-container>
        </li>
        <li>
          5
          <ng-container
            *ngIf="canBeGroup(5) !== 1; then tf; else tp"
          ></ng-container>
        </li>
        <li>
          7
          <ng-container
            *ngIf="canBeGroup(7) === 1; then tf; else tp"
          ></ng-container>
        </li>
        <li>
          11
          <ng-container
            *ngIf="canBeGroup(11) !== 1; then tf; else tp"
          ></ng-container>
        </li>
        <li>
          17
          <ng-container
            *ngIf="canBeGroup(17) === -1; then tf; else tp"
          ></ng-container>
        </li>
      </ul>
      <ng-template #tf>
        <fail></fail>
      </ng-template>
      <ng-template #tp>
        <pass></pass>
      </ng-template>
    </div>
  `,
  styles: [
    `
      :host {
        display: contents;
      }
    `
  ]
})
export class TestDataComponent {
  /**
  Ejemplos:
  1 => -1   no se puede completar ninguna caja
  3 =>  1   se completa 1 caja de 3
  5 =>  1   se completa 1 caja de 5
  11 => 1   se completa 1 caja de 5 y 2 cajas de 3  (1 * 5 + 2 * 3 = 11)

 */
  canBeGroup = qty => {
    return -1;
  };
}
