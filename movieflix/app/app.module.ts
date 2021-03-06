import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { AppComponent } from "./app.component";
import { LoginComponent } from "./components/login/login.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { DetailsComponent } from "./components/details/details.component";
import { MediaPlayerComponent } from "./components/media-player/media-player.component";
import { MediaThumbComponent } from "./components/media-thumb/media-thumb.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    DetailsComponent,
    MediaPlayerComponent,
    MediaThumbComponent
  ],
  bootstrap: [LoginComponent],
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
