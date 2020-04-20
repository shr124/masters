import { NgModule } from "@angular/core";
import { ToggleDirective } from "./toggle.directive";
import { CommonModule } from "@angular/common";


@NgModule({
    declarations: [
        ToggleDirective
        
    ],
    imports: [
        CommonModule
    ],
    exports: [
       ToggleDirective,
       CommonModule
    ]
})
export class SharedModule {

}