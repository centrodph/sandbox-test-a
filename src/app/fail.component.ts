import { Component } from "@angular/core";

@Component({
  selector: "fail",
  template: `
    <span style="color: red; margin-left: 10px;">FAIL</span>
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
export class FailComponent {}
