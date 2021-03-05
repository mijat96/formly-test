import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  form1 = new FormGroup({});
  model1 = { currency: 'aed', amount: 101 };
  fields1: FormlyFieldConfig[] = [
    {
      className: 'section-label',
      template: '<hr /><div><strong>Estimated Cost Design</strong></div>',
    },
    {
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          className: 'col-3',
          key: 'currency',
          type: 'select',
          templateOptions: {
            label: 'Currency',
            options: [
              { label: 'AED', value: 'aed' },
              { label: 'USD', value: 'usd' },
            ],
          },
        },
        {
          className: 'col-3',
          key: 'amount',
          type: 'input',
          hooks: {
            onChanges: (data) => {
              console.log({ data });
            },
          },
          templateOptions: {
            type: 'number',
            label: 'Amount',
            change: (field, $event) => {
              const value = $event.srcElement.value;
              const durationValue = value / 5;
              const newModel = { ...this.model1, durationValue };
              this.model1 = newModel;
              console.log({ field, $event });
            },
          },
        },
        {
          className: 'col-3',
          key: 'duration',
          type: 'select',
          templateOptions: {
            type: 'number',
            label: 'Duration',
            options: [
              { label: 'Months', value: 'months' },
              { label: 'Years', value: 'years' },
            ],
          },
        },
        {
          className: 'col-3',
          key: 'durationValue',
          type: 'input',
          templateOptions: {
            type: 'number',
            label: 'Test',
          },
        },
      ],
    },
  ];

  form2 = new FormGroup({});
  model2 = {};
  fields2: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'custom-row',
      fieldGroup: [
        {
          className: 'third',
          key: 'submissionType',
          type: 'input',
          templateOptions: {
            label: 'Submission Type',
            disabled: true,
          },
        },
        {
          className: 'third',
          key: 'userDirectorate',
          type: 'input',
          templateOptions: {
            label: 'User Directorate',
            disabled: true,
          },
        },
        {
          className: 'third',
          key: 'client',
          type: 'input',
          templateOptions: {
            label: 'Client',
          },
        },
      ],
    },
    {
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          className: 'col-4',
          key: 'proccurmentEngeneer',
          type: 'input',
          templateOptions: {
            label: 'Proccurment Engeneer',
            disabled: true,
          },
        },
        {
          className: 'col-4',
          key: 'fdqa',
          type: 'input',
          templateOptions: {
            label: 'FDQA',
            disabled: true,
          },
        },
        {
          className: 'col-4',
          key: 'tenderNumber',
          type: 'input',
          templateOptions: {
            label: 'Tender Number',
            type: 'number',
          },
        },
      ],
    },
  ];

  onSubmit() {
    console.log({ form: this.form1.value });
  }
}
