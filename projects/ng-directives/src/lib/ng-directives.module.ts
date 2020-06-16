import { NgModule } from "@angular/core";
import { NgDirectivesComponent } from "./ng-directives.component";
import { NumberOnlyDirective } from "./ng-directives-number-only.directive";

@NgModule({
  declarations: [NgDirectivesComponent, NumberOnlyDirective],
  imports: [],
  exports: [NgDirectivesComponent, NumberOnlyDirective],
})
export class NgDirectivesModule {}
