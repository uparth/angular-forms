import { Component, OnInit } from "@angular/core";

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

  subscriptions: iSubscription[] = [
    { value: "monthly", viewValue: "Monthly" },
    { value: "annual", viewValue: "Annual" },
    { value: "lifetime", viewValue: "Lifetime" }
  ];

  constructor() {}

  ngOnInit() {}
}

export interface iSubscription {
  value: string;
  viewValue: string;
}
