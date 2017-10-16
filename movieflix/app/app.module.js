"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var forms_1 = require("nativescript-angular/forms");
var app_component_1 = require("./app.component");
var login_component_1 = require("./components/login/login.component");
var dashboard_component_1 = require("./components/dashboard/dashboard.component");
var details_component_1 = require("./components/details/details.component");
var media_player_component_1 = require("./components/media-player/media-player.component");
var media_thumb_component_1 = require("./components/media-thumb/media-thumb.component");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                login_component_1.LoginComponent,
                dashboard_component_1.DashboardComponent,
                details_component_1.DetailsComponent,
                media_player_component_1.MediaPlayerComponent,
                media_thumb_component_1.MediaThumbComponent
            ],
            bootstrap: [login_component_1.LoginComponent],
            imports: [
                nativescript_module_1.NativeScriptModule,
                forms_1.NativeScriptFormsModule
            ],
            schemas: [core_1.NO_ERRORS_SCHEMA],
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBQzlFLG9EQUFxRTtBQUVyRSxpREFBK0M7QUFDL0Msc0VBQW9FO0FBQ3BFLGtGQUFnRjtBQUNoRiw0RUFBMEU7QUFDMUUsMkZBQXdGO0FBQ3hGLHdGQUFxRjtBQWtCckY7SUFBQTtJQUF3QixDQUFDO0lBQVosU0FBUztRQWhCckIsZUFBUSxDQUFDO1lBQ1IsWUFBWSxFQUFFO2dCQUNaLDRCQUFZO2dCQUNaLGdDQUFjO2dCQUNkLHdDQUFrQjtnQkFDbEIsb0NBQWdCO2dCQUNoQiw2Q0FBb0I7Z0JBQ3BCLDJDQUFtQjthQUNwQjtZQUNELFNBQVMsRUFBRSxDQUFDLGdDQUFjLENBQUM7WUFDM0IsT0FBTyxFQUFFO2dCQUNQLHdDQUFrQjtnQkFDbEIsK0JBQXVCO2FBQ3hCO1lBQ0QsT0FBTyxFQUFFLENBQUMsdUJBQWdCLENBQUM7U0FDNUIsQ0FBQztPQUNXLFNBQVMsQ0FBRztJQUFELGdCQUFDO0NBQUEsQUFBekIsSUFBeUI7QUFBWiw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xuXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBMb2dpbkNvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50XCI7XG5pbXBvcnQgeyBEYXNoYm9hcmRDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBEZXRhaWxzQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9kZXRhaWxzL2RldGFpbHMuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBNZWRpYVBsYXllckNvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvbWVkaWEtcGxheWVyL21lZGlhLXBsYXllci5jb21wb25lbnRcIjtcbmltcG9ydCB7IE1lZGlhVGh1bWJDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL21lZGlhLXRodW1iL21lZGlhLXRodW1iLmNvbXBvbmVudFwiO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBBcHBDb21wb25lbnQsXG4gICAgTG9naW5Db21wb25lbnQsXG4gICAgRGFzaGJvYXJkQ29tcG9uZW50LFxuICAgIERldGFpbHNDb21wb25lbnQsXG4gICAgTWVkaWFQbGF5ZXJDb21wb25lbnQsXG4gICAgTWVkaWFUaHVtYkNvbXBvbmVudFxuICBdLFxuICBib290c3RyYXA6IFtMb2dpbkNvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtcbiAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGVcbiAgXSxcbiAgc2NoZW1hczogW05PX0VSUk9SU19TQ0hFTUFdLFxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge31cbiJdfQ==