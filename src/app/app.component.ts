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
  model1 = {};
  fields1: FormlyFieldConfig[] = [
    {
      key: 'transferOfFunds',
      type: 'input',
      templateOptions: {
        label: 'Request Subject',
        placeholder: 'Transfer of funds',
        required: true,
      },
    },
  ];

  form2 = new FormGroup({});
  model2 = {};
  fields2: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          className: 'col-4',
          key: 'submissionType',
          type: 'input',
          templateOptions: {
            label: 'Submission Type',
            disabled: true,
          },
        },
        {
          className: 'col-4',
          key: 'userDirectorate',
          type: 'input',
          templateOptions: {
            label: 'User Directorate',
            disabled: true,
          },
        },
        {
          className: 'col-4',
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
