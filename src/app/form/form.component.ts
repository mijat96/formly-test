import { Component, OnInit, Input } from '@angular/core';
import { FormModel } from './form.model';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Input() formModel: Array<FormModel>;
  mapFormInstances = new Map<string, FormGroup>();
  form1 = new FormGroup({});

  constructor() { }

  ngOnInit(): void {
    this.formModel.forEach(x => {  
      this.mapFormInstances.set(x.formIdentificator, new FormGroup({}));
    })
  }

  onSubmit(){}

}
