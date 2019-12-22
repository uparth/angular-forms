import { NgModule } from "@angular/core";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatSelectModule } from "@angular/material/select";
import { MatDatepickerModule } from "@angular/material/datepicker";

const material = [
  MatInputModule,
  MatButtonModule,
  MatCheckboxModule,
  MatButtonToggleModule,
  MatSelectModule,
  MatDatepickerModule
];

@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule {}
