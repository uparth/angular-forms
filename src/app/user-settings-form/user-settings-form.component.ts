import { Component, OnInit } from "@angular/core";
import { userSettings } from "../data/user-settings";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-user-settings-form",
  templateUrl: "./user-settings-form.component.html",
  styleUrls: ["./user-settings-form.component.scss"]
})
export class UserSettingsFormComponent implements OnInit {
  checked = false;
  indeterminate = false;
  labelPosition = "after";
  disabled = false;

  originalUserSettings: userSettings = {
    name: "ParthUmrani",
    emailOffers: true,
    interfaceStyle: "Dark",
    subscriptionType: "annual",
    notes: "here are some notes"
  };

  // The speard operator ... only makes copy of all top level properties.
  // If we need deep copy like objects within objects then we need to use loadash deep clone method
  userSettings: userSettings = { ...this.originalUserSettings };

  subscriptions: iSubscription[] = [
    { value: "monthly", viewValue: "Monthly" },
    { value: "annual", viewValue: "Annual" },
    { value: "lifetime", viewValue: "Lifetime" }
  ];

  constructor() {}

  ngOnInit() {}

  onSubmit(form: NgForm) {
    console.log("in onsubmit: ", form.valid);
  }
}

export interface iSubscription {
  value: string;
  viewValue: string;
}
