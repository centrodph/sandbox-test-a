import { Component } from "@angular/core";

@Component({
  selector: "pass",
  template: `
    <span style="color: green; margin-left: 10px;">PASS</span>
  `,
  styles: [
    `
      :host {
        display: contents;
      }
      .table-right-data {
        font-size: 11px;
        line-height: 1.5;
      }
    `
  ]
})
export class PassComponent {}
