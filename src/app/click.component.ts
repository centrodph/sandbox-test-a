import { Component } from "@angular/core";

@Component({
  selector: "click-tracking",
  template: `
    <span>Click count: [0] Item Clicked: NAV-ITEM-CLICKED</span>
  `,
  styles: [
    `
      :host {
        display: contents;
      }
      span {
        margin: 10px;
        border: solid 1px;
      }
    `
  ]
})
export class ClickComponent {}
