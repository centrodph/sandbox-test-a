import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { FailComponent } from "./fail.component";
import { PassComponent } from "./pass.component";
import { TestDataComponent } from "./test.component";
import { NavComponent } from "./nav.component";
import { ClickComponent } from "./click.component";

@NgModule({
  declarations: [
    AppComponent,
    FailComponent,
    TestDataComponent,
    PassComponent,
    NavComponent,
    ClickComponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
