import { FormlyFieldConfig } from '@ngx-formly/core';

export interface FormModel{
    formIdentificator: string,
    formFillds: FormlyFieldConfig[],
    formValues: {}
}