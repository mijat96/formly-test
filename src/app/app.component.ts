import { Component, OnInit } from '@angular/core';
import { FormGroup, Form } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { FormModel } from './form/form.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {

    //VARIATION
    // var formModel = {} as FormModel; 
    // formModel.formIdentificator = this.formSubjectIdentificator;
    // formModel.formFillds = this.formSubjectFields;
    // formModel.formValues = this.formSubjectValue;
    // //console.log(JSON.stringify(this.formModel));
    // this.formModelArray.push(formModel);
    
    // var formModel2 = {} as FormModel;
    // formModel2.formIdentificator = this.formGeneralInfoIdentificator;
    // formModel2.formFillds = this.formGeneralInfoFields;
    // formModel2.formValues = this.formGeneralInfoValue;
    // this.formModelArray.push(formModel2);

    // var formModel3 = {} as FormModel;
    // formModel3.formIdentificator = this.formValidationDetailsIdentificator;
    // formModel3.formFillds = this.formValidationDetailsFields;
    // formModel3.formValues = this.formValidationDetailsValue;
    // this.formModelArray.push(formModel3);

    // var formModel4 = {} as FormModel;
    // formModel4.formIdentificator = this.formReasonForVariationIdentificator;
    // formModel4.formFillds = this.formReasonForVariationFields
    // formModel4.formValues = this.formReasonForVariationValue;
    // this.formModelArray.push(formModel4);

    // var formModel5 = {} as FormModel;
    // formModel5.formIdentificator = this.formBudgetIdentificator;
    // formModel5.formFillds = this.formBudgetFields
    // formModel5.formValues = this.formBudgetValue;
    // this.formModelArray.push(formModel5);

    // var formModel6 = {} as FormModel;
    // formModel6.formIdentificator = this.formPmcRecommendationIdentificator;
    // formModel6.formFillds = this.formPmcRecommendationFields
    // formModel6.formValues = this.formPmcRecommendationValue;
    // this.formModelArray.push(formModel6);

    // var formModel7 = {} as FormModel;
    // formModel7.formIdentificator = this.formValidationHistoryIdentificator;
    // formModel7.formFillds = this.formValidationHistoryFields
    // formModel7.formValues = this.formValidationHistoryValue;
    // this.formModelArray.push(formModel7);

    // var formModel8 = {} as FormModel;
    // formModel8.formIdentificator = this.formRecommendationsIdentificator;
    // formModel8.formFillds = this.formRecommendationsFields
    // formModel8.formValues = this.formRecommendationsValue;
    // this.formModelArray.push(formModel8);

    //WHISTLE BLOWING FORM
    // var formModel1 = {} as FormModel;
    // formModel1.formIdentificator = this.formGeneralInfoWhistleBlowingIdentificator;
    // formModel1.formFillds = this.formGeneralInfoWhistleBlowingFields;
    // formModel1.formValues = this.formGeneralInfoWhistleBlowingValue;
    // this.formModelArray.push(formModel1);

    // var formModel2 = {} as FormModel;
    // formModel2.formIdentificator = this.formReporterIdentitiyWhistleBlowingIdentificator;
    // formModel2.formFillds = this.formReporterIdentitiyWhistleBlowingFields;
    // formModel2.formValues = this.formReporterIdentitiyWhistleBlowingValue;
    // this.formModelArray.push(formModel2);

    // var formModel3 = {} as FormModel;
    // formModel3.formIdentificator = this.formReportDetailsIdentitiyWhistleBlowingIdentificator;
    // formModel3.formFillds = this.formReportDetailsIdentitiyWhistleBlowingFields;
    // formModel3.formValues = this.formReportDetailsIdentitiyWhistleBlowingValue;
    // this.formModelArray.push(formModel3);

    // var formModel4 = {} as FormModel;
    // formModel4.formIdentificator = this.formRecommendationWhistleBlowingIdentificator;
    // formModel4.formFillds = this.formRecommendationWhistleBlowingFields;
    // formModel4.formValues = this.formRecommendationWhistleBlowingValue;
    // this.formModelArray.push(formModel4);

    //TECHNICAL EVALUATION
    // var formModel1 = {} as FormModel;
    // formModel1.formIdentificator = this.formSubjectTechnicalEvaluationIdentificator;
    // formModel1.formFillds = this.formSubjectTechnicalEvaluationFields;
    // formModel1.formValues = this.formSubjectTechnicalEvaluationValue;
    // this.formModelArray.push(formModel1);

    // var formModel2 = {} as FormModel;
    // formModel2.formIdentificator = this.formGeneralInfoTechnicalEvaluationIdentificator;
    // formModel2.formFillds = this.formGeneralInfoTechnicalEvaluationFields;
    // formModel2.formValues = this.formGeneralInfoTechnicalEvaluationValue;
    // this.formModelArray.push(formModel2);

    // var formModel3 = {} as FormModel;
    // formModel3.formIdentificator = this.formTypeOfServiceTechnicalEvaluationIdentificator;
    // formModel3.formFillds = this.formTypeOfServiceTechnicalEvaluationFields;
    // formModel3.formValues = this.formTypeOfServiceTechnicalEvaluationValue;
    // this.formModelArray.push(formModel3);
    
    // var formModel4 = {} as FormModel;
    // formModel4.formIdentificator = this.formBudgetTechnicalEvaluationIdentificator;
    // formModel4.formFillds = this.formBudgetTechnicalEvaluationFields;
    // formModel4.formValues = this.formBudgetTechnicalEvaluationValue;
    // this.formModelArray.push(formModel4);

    // var formModel5 = {} as FormModel;
    // formModel5.formIdentificator = this.formTypeOfServicePeriodTechnicalEvaluationIdentificator;
    // formModel5.formFillds = this.formTypeOfServicePeriodTechnicalEvaluationFields;
    // formModel5.formValues = this.formTypeOfServicePeriodTechnicalEvaluationValue;
    // this.formModelArray.push(formModel5);

    // var formModel6 = {} as FormModel;
    // formModel6.formIdentificator = this.formBidderTechnicalEvaluationIdentificator;
    // formModel6.formFillds = this.formBidderTechnicalEvaluationFields;
    // formModel6.formValues = this.formBidderTechnicalEvaluationValue;
    // this.formModelArray.push(formModel6);
    
    // var formModel7 = {} as FormModel;
    // formModel7.formIdentificator = this.formRecommendationTechnicalEvaluationIdentificator;
    // formModel7.formFillds = this.formRecommendationTechnicalEvaluationFields;
    // formModel7.formValues = this.formRecommendationTechnicalEvaluationValue;
    // this.formModelArray.push(formModel7);

    //SUMMARY Submission Budget
    // var formModel1 = {} as FormModel;
    // formModel1.formIdentificator = this.formGeneralInfoSummarySubmissionBudgetIdentificator;
    // formModel1.formFillds = this.formGeneralInfoSummarySubmissionBudgetFields;
    // formModel1.formValues = this.formGeneralInfoSummarySubmissionBudgetValue;
    // this.formModelArray.push(formModel1);

    // var formModel2 = {} as FormModel;
    // formModel2.formIdentificator = this.formSubjectSummarySubmissionBudgetIdentificator;
    // formModel2.formFillds = this.formSubjectSummarySubmissionBudgetFields;
    // formModel2.formValues = this.formSubjectSummarySubmissionBudgetValue;
    // this.formModelArray.push(formModel2);

    // var formModel3 = {} as FormModel;
    // formModel3.formIdentificator = this.formTransferOfFundsSummarySubmissionBudgetIdentificator;
    // formModel3.formFillds = this.formTransferOfFundsSummarySubmissionBudgetFields;
    // formModel3.formValues = this.formTransferOfFundsSummarySubmissionBudgetValue;
    // this.formModelArray.push(formModel3);

    // var formModel4 = {} as FormModel;
    // formModel4.formIdentificator = this.formRequestSummarySubmissionBudgetIdentificator;
    // formModel4.formFillds = this.formRequestSummarySubmissionBudgetFields;
    // formModel4.formValues = this.formRequestSummarySubmissionBudgetValue;
    // this.formModelArray.push(formModel4);

    // var formModel5 = {} as FormModel;
    // formModel5.formIdentificator = this.formRecommendationSummarySubmissionBudgetIdentificator;
    // formModel5.formFillds = this.formRecommendationSummarySubmissionBudgetFields;
    // formModel5.formValues = this.formRecommendationSummarySubmissionBudgetValue;
    // this.formModelArray.push(formModel5);

    //STRATEGY
    // var formModel = {} as FormModel;
    // formModel.formIdentificator = this.formSubjectStrategyIdentificator;
    // formModel.formFillds = this.formSubjectStrategyFields;
    // formModel.formValues = this.formSubjectStrategyValue;
    // this.formModelArray.push(formModel);

    // var formModel1 = {} as FormModel;
    // formModel1.formIdentificator = this.formGeneralInfoStrategyIdentificator;
    // formModel1.formFillds = this.formGeneralInfoStrategyFields;
    // formModel1.formValues = this.formGeneralInfoStrategyValue;
    // this.formModelArray.push(formModel1);

    // var formModel2 = {} as FormModel;
    // formModel2.formIdentificator = this.formBudgetStrategyIdentificator;
    // formModel2.formFillds = this.formBudgetStrategyFields;
    // formModel2.formValues = this.formBudgetStrategyValue;
    // this.formModelArray.push(formModel2);

    // var formModel3 = {} as FormModel;
    // formModel3.formIdentificator = this.formProjectBriefDetailsStrategyIdentificator;
    // formModel3.formFillds = this.formProjectBriefDetailsStrategyFields;
    // formModel3.formValues = this.formProjectBriefDetailsStrategyValue;
    // this.formModelArray.push(formModel3);

    // var formModel4 = {} as FormModel;
    // formModel4.formIdentificator = this.formProjectDescriptionStrategyIdentificator;
    // formModel4.formFillds = this.formProjectDescriptionStrategyFields;
    // formModel4.formValues = this.formProjectDescriptionStrategyValue;
    // this.formModelArray.push(formModel4);

    // var formModel5 = {} as FormModel;
    // formModel5.formIdentificator = this.formProjectDescriptionStrategyIdentificator;
    // formModel5.formFillds = this.formProjectDescriptionStrategyFields;
    // formModel5.formValues = this.formProjectDescriptionStrategyValue;
    // this.formModelArray.push(formModel5);

    // var formModel6 = {} as FormModel;
    // formModel6.formIdentificator = this.formTenderDetailsStrategyIdentificator;
    // formModel6.formFillds = this.formTenderDetailsStrategyFields;
    // formModel6.formValues = this.formTenderDetailsStrategyValue;
    // this.formModelArray.push(formModel6);

    // var formModel7 = {} as FormModel;
    // formModel7.formIdentificator = this.formRecommendationsStrategyIdentificator;
    // formModel7.formFillds = this.formRecommendationsStrategyFields;
    // formModel7.formValues = this.formRecommendationsStrategyValue;
    // this.formModelArray.push(formModel7);

    //NPC
    var formModel = {} as FormModel;
    formModel.formIdentificator = this.formSubjectNpcIdentificator;
    formModel.formFillds = this.formSubjectNpcFields;
    formModel.formValues = this.formSubjectStrategyValue;
    this.formModelArray.push(formModel);

    var formModel1 = {} as FormModel;
    formModel1.formIdentificator = this.formGeneralInfoNpcIdentificator;
    formModel1.formFillds = this.formGeneralInfoNpcFields;
    formModel1.formValues = this.formGeneralInfoStrategyValue;
    this.formModelArray.push(formModel1);

  }
  //formModel: FormModel;
  formModelArray: Array<FormModel> = new Array<FormModel>();

  //SUBJECT NPC
  formSubjectNpcIdentificator = "Subject";
  formSubjectNpcValue = { 
    requestSubject: 'Transfer Of Funds'
  };
  formSubjectNpcFields: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          className: 'col',
          key: 'requestSubject',
          type: 'input',
          templateOptions: {
            label: 'Request Subject',
          },
        },
      ],
    },
  ];

  //GENERAL INFO NPC
  formGeneralInfoNpcIdentificator = "General Info";
  formGeneralInfoNpcValue = { 
    submissionType: 'NPC', userDirectorate: 'Procurement',
    procurementEngineer: 'Ibrahim Al Raeesi', fdoa: 'COE'
  };
  formGeneralInfoNpcFields: FormlyFieldConfig[] = [
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
            disabled: true
          },
        },
        {
          className: 'col-4',
          key: 'contractorName',
          type: 'input',
          templateOptions: {
            label: 'Contractor Name',
          },
        },{
          className: 'col-4',
          key: 'Pruocurement Engineer',
          type: 'input',
          templateOptions: {
            label: 'pruocurementEngineer',
            disabled: true
          },
        },
        {
          className: 'col-4',
          key: 'consultantName',
          type: 'input',
          templateOptions: {
            label: 'Consultant Name',
          },
        },
        {
          className: 'col-4',
          key: 'fdoa',
          type: 'input',
          templateOptions: {
            label: 'FDOA',
            disabled: true
          },
        },
      ],
    },
  ];

  //NPC DETAILS NPC

  //REASONS FOR NPC
  formReasonForNpcIdentificator = "Type Of Service";
  formReasonForNpcValue = {};
  formReasonForNpcFields: FormlyFieldConfig[] = [
    {
        fieldGroupClassName: 'row',
        fieldGroup: [
          {
            className: 'col',
            key: 'authorityRequiremnt',
            type: 'checkbox',
            templateOptions: {
              label: 'Authority Requiremnt',    
            },
          },
          {
            className: 'col',
            key: 'clientRequest',
            type: 'checkbox',
            templateOptions: {
              label: 'Client Request',    
            },
          },
          {
            className: 'col',
            key: 'musanada',
            type: 'checkbox',
            templateOptions: {
              label: 'Service',    
            },
          },
          {
            className: 'col',
            key: 'construction',
            type: 'checkbox',
            templateOptions: {
              label: 'Construction',    
            },
          },
          {
            className: 'col',
            key: 'designAndBuild',
            type: 'checkbox',
            templateOptions: {
              label: 'Design And Build',    
            },
          },
          {
            className: 'col',
            key: 'products',
            type: 'checkbox',
            templateOptions: {
              label: 'Products',    
            },
          },
        ],
      },
    ];

  //BUDGET NPC

  //BUSINESS REQUEST NPC

  //PMCD RECOMMENDATION NPC

  //NPC DETAILS

  //PROCUREMENT CONTRACTUAL REVIEW

  
  //STRATEGY
  //SUBJECT STRATEGY
  formSubjectStrategyIdentificator = "Subject";
  formSubjectStrategyValue = { 
    requestSubject: 'Transfer Of Funds'
  };
  formSubjectStrategyFields: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          className: 'col',
          key: 'requestSubject',
          type: 'input',
          templateOptions: {
            label: 'Request Subject',
          },
        },
      ],
    },
  ];

  //GENERAL INFO STRATEGY
  formGeneralInfoStrategyIdentificator = "General Info";
  formGeneralInfoStrategyValue = { 
    submissionType: 'Strategy', userDirectorate: 'Procurement',
    procurementEngineer: 'Ibrahim Al Raeesi', fdoa: 'COE'
  };
  formGeneralInfoStrategyFields: FormlyFieldConfig[] = [
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
            disabled: true
          },
        },
        {
          className: 'col-4',
          key: 'pruocurementEngineer',
          type: 'input',
          templateOptions: {
            label: 'Pruocurement Engineer',
            disabled: true
          },
        },
        {
          className: 'col-4',
          key: 'fdoa',
          type: 'input',
          templateOptions: {
            label: 'FDOA',
            disabled: true
          },
        },
      ],
    },
  ];

  //BUDGET STRATEGY
  formBudgetStrategyIdentificator = "Budeget";
  formBudgetStrategyValue = { 
    currencyEstimated: 'aed', amountEstimated: '10000000', 
    currencyApproved: 'aed', amountApproved: '10000000'
  };
  formBudgetStrategyFields: FormlyFieldConfig[] = [
    {
      className: 'section-label',
      template: '<hr /><div><strong>Estimated Cost</strong></div>',
    },
    {
      className: 'section-label',
      template: '<hr /><div><strong>Approved Budget</strong></div>',
    },
    {
      className: 'section-label',
      template: '<hr /><div><strong>Budget Availability</strong></div>',
    },
    {
        fieldGroupClassName: 'row',
        fieldGroup: [
          {
            className: 'col-3',
            key: 'currencyEstimated',
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
            key: 'amountEstimated',
            type: 'input',
            templateOptions: {
              label: 'Amount',        
              type: 'number',
            },
          },
          {
            className: 'col-3',
            key: 'currencyApproved',
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
            key: 'amountApproved',
            type: 'input',
            templateOptions: {
              label: 'Amount',        
              type: 'number'
            },
          },
          {
              className: 'col-3',
              key: 'budgetAvailabilityYes',
              type: 'checkbox',
              templateOptions: {
                label: 'yes',    
              },
            },
            {
              className: 'col-3',
              key: 'budgetAvailabilityNo',
              type: 'checkbox',
              templateOptions: {
                label: 'no',    
              },
            },
            {
              className: 'col-3',
              key: 'budgetAvailabilityDofFunded',
              type: 'checkbox',
              templateOptions: {
                label: 'DOF Funded',    
              },
            },
            {
              className: 'col-3',
              key: 'budgetAvailabilityClientFounded',
              type: 'checkbox',
              templateOptions: {
                label: 'Client Funded',    
              },
            },
            {
              className: 'col',
              key: 'remarks',
              type: 'input',
              templateOptions: {
                label: 'Remarks',
              },
            },
        ]
      }
  ]

  //PROJECT BRIEF DETAILS STRATEGY
  formProjectBriefDetailsStrategyIdentificator = "Project Brief Details";
  formProjectBriefDetailsStrategyValue = {
  };
  formProjectBriefDetailsStrategyFields: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          className: 'col',
          key: 'projectBriefDetails',
          type: 'input',
          templateOptions: {
          },
        },
      ],
    },
  ];

  //PRJECT DESCRIPTION STRATEGY
  formProjectDescriptionStrategyIdentificator = "Project Description";
  formProjectDescriptionStrategyValue = {
  };
  formProjectDescriptionStrategyFields: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          className: 'col-4',
          key: 'typeOfService',
          type: 'select',
          templateOptions: {
            label: 'Type Of Service',
            options:[
              { label: ' ', value: ' ' },
              { label: ' ', value: ' ' },
            ],
          },
        },
        {
          className: 'col-4',
          key: 'methodOfCommercialEngagement',
          type: 'select',
          templateOptions: {
            label: 'Method Of Commercial Engagement',
            options:[
              { label: ' ', value: ' ' },
              { label: ' ', value: ' ' },
            ],
          },
        },
        {
          className: 'col-4',
          key: 'methodOfBiddersShortlisting',
          type: 'select',
          templateOptions: {
            label: 'Method Of Bidders Shortlisting',
            options:[
              { label: ' ', value: ' ' },
              { label: ' ', value: ' ' },
            ],
          },
        },
        {
          className: 'col-12',
          key: 'evaluationCriteria',
          type: 'input',
          templateOptions: {
            label: 'Evaluation Criteria',
          },
        },
        {
          className: 'col-12',
          key: 'advantages',
          type: 'input',
          templateOptions: {
            label: 'Advantages',
          },
        },
        {
          className: 'col-12',
          key: 'disadvantages',
          type: 'input',
          templateOptions: {
            label: 'Disadvantages',
          },
        },
      ],
    },
  ];

  //TENDER DETAILS STRATEGY
  formTenderDetailsStrategyIdentificator = "Tender Details";
  formTenderDetailsStrategyValue = {
  };
  formTenderDetailsStrategyFields: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          className: 'col-6',
          key: 'prReceipt',
          type: 'input',
          templateOptions: {
            label: 'PR Receipt',
            type: 'date'
          },
        },
        {
          className: 'col-6',
          key: 'rfi',
          type: 'input',
          templateOptions: {
            label: 'RFI',
            type: 'date'
          },
        },
        {
          className: 'col-6',
          key: 'rfp',
          type: 'input',
          templateOptions: {
            label: 'RFP',
            type: 'date'
          },
        },
        {
          className: 'col-6',
          key: 'technicalEvaluation',
          type: 'input',
          templateOptions: {
            label: 'Technical Evaluation',
            type: 'date'
          },
        },
        {
          className: 'col-6',
          key: 'technicalEvaluationApproval',
          type: 'input',
          templateOptions: {
            label: 'Technical Evaluation Approval',
            type: 'date'
          },
        },
        {
          className: 'col-6',
          key: 'commercialEvaluation',
          type: 'input',
          templateOptions: {
            label: 'Commercial Evaluation',
            type: 'date'
          },
        },
        {
          className: 'col-6',
          key: 'issuanceOfTenderRecommendation',
          type: 'input',
          templateOptions: {
            label: 'Issuance Of Tender Recommendation',
            type: 'date'
          },
        },
        {
          className: 'col-6',
          key: 'excomApproval',
          type: 'input',
          templateOptions: {
            label: 'EXCOM Approval(if, applicable)',
            type: 'date'
          },
        },
        {
          className: 'col-6',
          key: 'ecMemoSubmission',
          type: 'input',
          templateOptions: {
            label: 'EC Memo Submission(if, applicable)',
            type: 'date'
          },
        },
        {
          className: 'col-6',
          key: 'award',
          type: 'input',
          templateOptions: {
            label: 'Award',
            type: 'date'
          },
        },
        {
          className: 'col-6',
          key: 'estimatedTenderingDuration',
          type: 'input',
          templateOptions: {
            label: 'Estimated Tendering Duration (Days)',
          },
        },
        {
          className: 'col-12',
          key: 'remarks',
          type: 'input',
          templateOptions: {
            label: 'Remarks',
          },
        },
      ],
    },
  ];

  //RECOMMENDATIONS STRATEGY
  formRecommendationsStrategyIdentificator = "Recommendations";
  formRecommendationsStrategyValue = {
  };
  formRecommendationsStrategyFields: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          className: 'col',
          key: 'recommendations',
          type: 'input',
          templateOptions: {
          },
        },
      ],
    },
  ];

  //SUMMARY SUBMISSION BUDGET
  //GENERAL INFO SUBMISSION BUDGET
  formGeneralInfoSummarySubmissionBudgetIdentificator = "General Info";
  formGeneralInfoSummarySubmissionBudgetValue = { 
    submissionType: 'transferOfFunds'
  };
  formGeneralInfoSummarySubmissionBudgetFields: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          className: 'col-4',
          key: 'submissionType',
          type: 'select',
          templateOptions: {
            label: 'Submission Type',
            disabled: true,
            options:[
              { label: 'Transfer of funds', value: 'transferOfFunds' },
              { label: ' ', value: ' ' },
            ],
          },
        },
        {
          className: 'col-4',
          key: 'requesterUnit',
          type: 'select',
          templateOptions: {
            label: 'Requester Unit',
            options:[
              { label: ' ', value: ' ' },
              { label: ' ', value: ' ' },
            ],
          },
        }
      ],
    },
  ];

  //SUBJECT SUMMARY SUBMISSION BUDGET
  formSubjectSummarySubmissionBudgetIdentificator = "General Info";
  formSubjectSummarySubmissionBudgetValue = { 
    requestSubject: 'Transfer Of Funds'
  };
  formSubjectSummarySubmissionBudgetFields: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          className: 'col',
          key: 'requestSubject',
          type: 'input',
          templateOptions: {
            label: 'Request Subject',
          },
        },
      ],
    },
  ];

  //TRANSFER OF FUNDS SUMMARY SUBMISSION BUDGET
  formTransferOfFundsSummarySubmissionBudgetIdentificator = "Transfer Of Funds";
  formTransferOfFundsSummarySubmissionBudgetValue = { 
    frin: 'financeDepartment', currency: 'aed', amount: '10000000'
  };
  formTransferOfFundsSummarySubmissionBudgetFields: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          className: 'col-3',
          key: 'from',
          type: 'select',
          templateOptions: {
            label: 'From',
            options:[
              { label: 'Finance Department', value: 'financeDepartment' },
              { label: ' ', value: ' ' },
            ],
          },
        },
        {
          className: 'col-3',
          key: 'to',
          type: 'select',
          templateOptions: {
            label: 'To',
            options:[
              { label: ' ', value: ' ' },
              { label: ' ', value: ' ' },
            ],
          },
        },
        {
          className: 'col-3',
          key: 'currency',
          type: 'select',
          templateOptions: {
            label: 'Currency',
            options:[
              { label: 'AED', value: 'aed' },
              { label: 'USD', value: 'usd' },
            ],
          },
        },
        {
          className: 'col-3',
          key: 'amount',
          type: 'input',
          templateOptions: {
            label: 'Amount',
          },
        },
        {
          className: 'col',
          key: 'details',
          type: 'input',
          templateOptions: {
            label: 'Details',
          },
        },
      ],
    },
  ];

  //REQUEST SUMMARY SUBMISSION BUDGET
  formRequestSummarySubmissionBudgetIdentificator = "Request";
  formRequestSummarySubmissionBudgetValue = { 
  };
  formRequestSummarySubmissionBudgetFields: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'row',
      fieldGroup: [
          {
            className: 'col',
            key: 'request',
            type: 'input',
            templateOptions: {
            },
          },
      ],
    },
  ];

  //RECOMMENDATION SUMMARY SUBMISSION BUDGET
  formRecommendationSummarySubmissionBudgetIdentificator = "Recommendation";
  formRecommendationSummarySubmissionBudgetValue = { 
  };
  formRecommendationSummarySubmissionBudgetFields: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'row',
      fieldGroup: [
          {
            className: 'col',
            key: 'recommendation',
            type: 'input',
            templateOptions: {
            },
          },
      ],
    },
  ];

  //TECHNICAL EVALUATION
  //SUBJECT TECHNICAL EVALUATION
  formSubjectTechnicalEvaluationIdentificator = "Subject";
  formSubjectTechnicalEvaluationValue = { requestSubject: 'Technical Evaluation for tender No:123123' };
  formSubjectTechnicalEvaluationFields: FormlyFieldConfig[] = [
    {
        fieldGroupClassName: 'row',
        fieldGroup: [
          {
            className: 'col',
            key: 'requestSubject',
            type: 'input',
            templateOptions: {
              placeholder: 'Transfer of founds',
              label: 'Request Subject',              
            },
          }
        ],
      },
    ];

  //GENERAL INFO TECHNICAL EVALUATION
  formGeneralInfoTechnicalEvaluationIdentificator = "General Info";
  formGeneralInfoTechnicalEvaluationValue = { 
    submissionType: 'Technical Evaluation',  userDirectorate: 'Procurement', 
    pruocurementEngineer: 'Ibrahim AlRaeesi', fdoa: 'CEO'
  };
  formGeneralInfoTechnicalEvaluationFields: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          className: 'col-4',
          key: 'submissionType',
          type: 'input',
          templateOptions: {
            label: 'Submission Type',
            disabled: true
          },
        },
        {
          className: 'col-4',
          key: 'userDirectorate',
          type: 'input',
          templateOptions: {
            label: 'User Directorate',
            disabled: true
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
        {
          className: 'col-4',
          key: 'pruocurementEngineer',
          type: 'input',
          templateOptions: {
            label: 'Pruocurement Engineer',              
            disabled: true
          },
        },
        {
          className: 'col-4',
          key: 'fdoa',
          type: 'input',
          templateOptions: {
            label: 'FDOA',
            disabled: true
          },
        },
        {
          className: 'col',
          key: 'tenderNo',
          type: 'input',
          templateOptions: {
            label: 'Tender No.',
          },
        }
      ],
    },
  ];

  //TYPE OF SERVICE TECHNICAL EVALUATION
  formTypeOfServiceTechnicalEvaluationIdentificator = "Type Of Service";
  formTypeOfServiceTechnicalEvaluationValue = {};
  formTypeOfServiceTechnicalEvaluationFields: FormlyFieldConfig[] = [
    {
        fieldGroupClassName: 'row',
        fieldGroup: [
          {
            className: 'col',
            key: 'design',
            type: 'checkbox',
            templateOptions: {
              label: 'Design',    
            },
          },
          {
            className: 'col',
            key: 'supervision',
            type: 'checkbox',
            templateOptions: {
              label: 'Supervision',    
            },
          },
          {
            className: 'col',
            key: 'service',
            type: 'checkbox',
            templateOptions: {
              label: 'Service',    
            },
          },
          {
            className: 'col',
            key: 'construction',
            type: 'checkbox',
            templateOptions: {
              label: 'Construction',    
            },
          },
          {
            className: 'col',
            key: 'designAndBuild',
            type: 'checkbox',
            templateOptions: {
              label: 'Design And Build',    
            },
          },
          {
            className: 'col',
            key: 'products',
            type: 'checkbox',
            templateOptions: {
              label: 'Products',    
            },
          },
        ],
      },
    ];

    //BUDGET TECHNICAL EVALUATION
    formBudgetTechnicalEvaluationIdentificator = "Budeget";
    formBudgetTechnicalEvaluationValue = { 
      currencyEstimated: 'aed', amountEstimated: '10000000', 
      currencyApproved: 'aed', amountApproved: '10000000'
    };
    formBudgetTechnicalEvaluationFields: FormlyFieldConfig[] = [
      {
        className: 'section-label',
        template: '<hr /><div><strong>Estimated Cost</strong></div>',
      },
      {
        className: 'section-label',
        template: '<hr /><div><strong>Approved Budget</strong></div>',
      },
      {
        className: 'section-label',
        template: '<hr /><div><strong>Budget Availability</strong></div>',
      },
      {
          fieldGroupClassName: 'row',
          fieldGroup: [
            {
              className: 'col-3',
              key: 'currencyEstimated',
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
              key: 'amountEstimated',
              type: 'input',
              templateOptions: {
                label: 'Amount',        
                type: 'number',
              },
            },
            {
              className: 'col-3',
              key: 'currencyApproved',
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
              key: 'amountApproved',
              type: 'input',
              templateOptions: {
                label: 'Amount',        
                type: 'number'
              },
            },
            {
                className: 'col-3',
                key: 'budgetAvailabilityYes',
                type: 'checkbox',
                templateOptions: {
                  label: 'yes',    
                },
              },
              {
                className: 'col-3',
                key: 'budgetAvailabilityNo',
                type: 'checkbox',
                templateOptions: {
                  label: 'no',    
                },
              },
              {
                className: 'col-3',
                key: 'budgetAvailabilityDofFunded',
                type: 'checkbox',
                templateOptions: {
                  label: 'DOF Funded',    
                },
              },
              {
                className: 'col-3',
                key: 'budgetAvailabilityClientFounded',
                type: 'checkbox',
                templateOptions: {
                  label: 'Client Funded',    
                },
              },
              {
                className: 'col',
                key: 'remarks',
                type: 'input',
                templateOptions: {
                  label: 'Remarks',
                },
              },
          ]
        }
    ]

  //TYPE OF SERVICE PERIOD TECHNICAL EVALUATION
  formTypeOfServicePeriodTechnicalEvaluationIdentificator = "Type Of Service";
  formTypeOfServicePeriodTechnicalEvaluationValue = { 
    period: 'days', periodCount: '10' 
  };
  formTypeOfServicePeriodTechnicalEvaluationFields: FormlyFieldConfig[] = [
    {
        fieldGroupClassName: 'row',
        fieldGroup: [
          {
            className: 'col-3',
            key: 'period',
            type: 'select',
            templateOptions: {
              label: 'Period',        
              options: [
                { label: 'Days', value: 'days' },
                { label: 'Years', value: 'years' },
              ],
            },
          },
          {
            className: 'col-3',
            key: 'periodCount',
            type: 'input',
            templateOptions: {
              label: ' ',
              type: 'number',
              disabled: true
            },
          },
          {
            className: 'col',
            key: 'remarks',
            type: 'input',
            templateOptions: {
              label: 'Remarks',
            },
          },
        ]
      }
  ]

  //BIDDER TECHNICAL EVALUATION 
  formBidderTechnicalEvaluationIdentificator = "Bidder Technical Evaluation";
  formBidderTechnicalEvaluationValue = { 
    cutOffScore: '1',
  };
  formBidderTechnicalEvaluationFields: FormlyFieldConfig[] = [
    {
        fieldGroupClassName: 'row',
        fieldGroup: [
          {
            className: 'col-1',
            key: 'cutOffScore',
            type: 'select',
            templateOptions: {
              label: 'Cut-Off Score',        
              options: [
                { label: '1', value: '1' },
                { label: '2', value: '2' },
              ],
            },
          },
          {
            className: 'col-12',
            key: 'remarks',
            type: 'input',
            templateOptions: {
              label: 'Remarks',
            },
          },
        ]
      }
  ]

  //RECOMMENDATION TECHNICAL EVALUATION 
  formRecommendationTechnicalEvaluationIdentificator = "Recommendation";
  formRecommendationTechnicalEvaluationValue = {};
  formRecommendationTechnicalEvaluationFields: FormlyFieldConfig[] = [
    {
        fieldGroupClassName: 'row',
        fieldGroup: [
          {
            className: 'col',
            key: 'remarks',
            type: 'input',
            templateOptions: {
              label: 'Remarks',
            },
          },
        ]
      }
  ]

  //WHISTLE BLOWING
  //SUBJECT WHISTLE BLOWING FORM
  formSubjectWhistleBlowingIdentificator = "Subject";
  formSubjectWhistleBlowingValue = {};
  formSubjectWhistleBlowingFields: FormlyFieldConfig[] = [
    {
        fieldGroupClassName: 'row',
        fieldGroup: [
          {
            className: 'col',
            key: 'requestSubject',
            type: 'input',
            templateOptions: {
              placeholder: 'Transfer of founds',
              label: 'Request Subject',              
            },
          }
        ],
      },
    ];

    //GENERAL INFO WHISTLE BLOWING FORM
    formGeneralInfoWhistleBlowingIdentificator = "General Info";
    formGeneralInfoWhistleBlowingValue = {};
    formGeneralInfoWhistleBlowingFields: FormlyFieldConfig[] = [
      {
          fieldGroupClassName: 'row',
          fieldGroup: [
            {
              className: 'col',
              key: 'submissionType',
              type: 'input',
              templateOptions: {
                placeholder: 'Whistle Blowing Form',
                label: 'Submission Type',              
              },
            },
            {
              className: 'col',
              key: 'procurement',
              type: 'input',
              templateOptions: {
                placeholder: 'Procurement',
                label: 'Client/Directorate',              
              },
            },
            {
              className: 'col',
              key: 'incidentRef',
              type: 'input',
              templateOptions: {
                label: 'Incident Ref',              
              },
            },
            {
              className: 'col',
              key: 'incidentRef',
              type: 'input',
              templateOptions: {
                label: 'Incident Ref',              
                type: 'date'
              },
            },
            {
              className: 'col',
              key: 'receivedVia',
              type: 'select',
              templateOptions: {
                label: 'Received via',
                options: [
                  { label: 'Self Attendance', value: 'selfAttendance' },
                  { label: 'Day', value: 'day' },
                ],          
              },
            }
          ],
        },
      ];

  //REPORTER IDENTITIY WHISTLE BLOWING FORM
  formReporterIdentitiyWhistleBlowingIdentificator = "Reporter Identitiy";
  formReporterIdentitiyWhistleBlowingValue = {};
  formReporterIdentitiyWhistleBlowingFields: FormlyFieldConfig[] = [
    {
        fieldGroupClassName: 'row',
        fieldGroup: [
          {
            className: 'col',
            key: 'private',
            type: 'checkbox',
            templateOptions: {
              label: 'Private',    
            },
          },
          {
            className: 'col',
            key: 'anonymus',
            type: 'checkbox',
            templateOptions: {
              label: 'Anonymus',    
            },
          },
          {
            className: 'col-3',
            key: 'firstName',
            type: 'input',
            templateOptions: {
              label: 'First Name',              
            },
          },
          {
            className: 'col-3',
            key: 'middleName',
            type: 'input',
            templateOptions: {
              label: 'Middle Name',              
            },
          },
          {
            className: 'col-3',
            key: 'lastName',
            type: 'input',
            templateOptions: {
              label: 'Last Name',              
            },
          },
          {
            className: 'col-3',
            key: 'phoneNumber',
            type: 'input',
            templateOptions: {
              label: 'Phone Number',              
            },
          }
        ],
      },
    ];

  //REPORT DETAILS WHISTLE BLOWING FORM
  formReportDetailsIdentitiyWhistleBlowingIdentificator = "Report Details";
  formReportDetailsIdentitiyWhistleBlowingValue = {};
  formReportDetailsIdentitiyWhistleBlowingFields: FormlyFieldConfig[] = [
    {
        fieldGroupClassName: 'row',
        fieldGroup: [
          {
            className: 'col-3',
            key: 'email',
            type: 'input',
            templateOptions: {
              label: 'E mail',              
            },
          },
          {
            className: 'col-3',
            key: 'company',
            type: 'input',
            templateOptions: {
              label: 'Company',              
            },
          },
          {
            className: 'col-3',
            key: 'thePerpetratorOfTheOffence',
            type: 'select',
            templateOptions: {
              label: 'The Perpetrator Of The Offence',
              options: [
                { label: '', value: '' },
                { label: '', value: '' },
              ],
            },
          },
          {
            className: 'col-3',
            key: 'natureOfAllegation',
            type: 'select',
            templateOptions: {
              label: 'Nature Of Allegation',
              options: [
                { label: '', value: '' },
                { label: '', value: '' },
              ],           
            },
          },
          {
            className: 'col-3',
            key: 'fraudIncludesIntentionalMisInformingMisGuidance',
            type: 'select',
            templateOptions: {
              label: 'Fraud, includes intentional mis-informing/mis-guidance',
              options: [
                { label: '', value: '' },
                { label: '', value: '' },
              ],
            },
          },
          {
            className: 'col-3',
            key: 'describeTheIncidentIfRepetitiveOrHasPrecedent',
            type: 'input',
            templateOptions: {
              label: 'Describe the incident if repetitive or has precedent',
            },
          }
        ],
      },
    ];

  //RECOMMENDATION WHISTLE BLOWING FORM
  formRecommendationWhistleBlowingIdentificator = "Recommendation";
  formRecommendationWhistleBlowingValue = {};
  formRecommendationWhistleBlowingFields: FormlyFieldConfig[] = [
    {
        fieldGroupClassName: 'row',
        fieldGroup: [
          {
            className: 'col',
            key: 'recommendation',
            type: 'input',
            templateOptions: {
                            
            },
          },
        ],
      },
    ];


  //VARIATION
  //SUBJECT VARIATION FORM
  formSubjectIdentificator = "Subject";
  formSubjectValue = {};
  formSubjectFields: FormlyFieldConfig[] = [
    {
        fieldGroupClassName: 'row',
        fieldGroup: [
          {
            className: 'col',
            key: 'requestSubject',
            type: 'input',
            templateOptions: {
              placeholder: 'Transfer of founds',
              label: 'Request Subject',              
            },
          }
        ],
      },
    ];

    //GENERAL INFO VARIATION FORM
    formGeneralInfoIdentificator = "General Info";
    formGeneralInfoValue = {};
    formGeneralInfoFields: FormlyFieldConfig[] = [
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
              key: 'contractorName',
              type: 'input',
              templateOptions: {
                label: 'Contractor Name',
              },
            },
            {
              className: 'col-4',
              key: 'pruocurementEngineer',
              type: 'input',
              templateOptions: {
                label: 'Pruocurement Engineer',
                disabled: true,
              },
            },
            {
              className: 'col-4',
              key: 'fdoa',
              type: 'input',
              templateOptions: {
                label: 'FDOA',
                disabled: true,
              },
            }
          ],
        },
      ];

    //VALIDATION DETAILS VARIATION FORM
    formValidationDetailsIdentificator = "Validation Details";
    formValidationDetailsValue = {};
    formValidationDetailsFields: FormlyFieldConfig[] = [
      {
          fieldGroupClassName: 'row',
          fieldGroup: [
            {
              className: 'col-4',
              key: 'contractNo',
              type: 'input',
              templateOptions: {
                label: 'Contract No',
              },
            },
            {
              className: 'col-4',
              key: 'duration',
              type: 'select',
              templateOptions: {
                label: 'Duration',        
                options: [
                  { label: 'Month', value: 'month' },
                  { label: 'Day', value: 'day' },
                ],
              },
            },
            {
              className: 'col-4',
              key: 'durationValue',
              type: 'input',
              templateOptions: {
                label: ' ',
                type: 'number'
              }
            },
            {
              className: 'col-4',
              key: 'estimatedAditionalCost',
              type: 'select',
              templateOptions: {
                label: 'Estimated Aditional Cost',        
                options: [
                  { label: 'AED', value: 'aed' },
                  { label: 'USD', value: 'usd' },
                ],
              },
            },
            {
              className: 'col-4',
              key: 'estimatedAditionalCostValue',
              type: 'input',
              templateOptions: {
                label: ' ',
                type: 'number'
              }
            },
            {
              className: 'col-4',
              key: 'variationNo',
              type: 'input',
              templateOptions: {
                label: 'Variation No',
              },
            }
          ],
        },
      ];

      //REASON FOR VARIATION FORM
      formReasonForVariationIdentificator = "Reason for variation";
      formReasonForVariationValue = {};
      formReasonForVariationFields: FormlyFieldConfig[] = [
        {
            fieldGroupClassName: 'row',
            fieldGroup: [
              {
                className: 'col-3',
                key: 'clientRequest',
                type: 'checkbox',
                templateOptions: {
                  label: 'Client Request',    
                },
              },
              {
                className: 'col-3',
                key: 'others',
                type: 'checkbox',
                templateOptions: {
                  label: 'Others',    
                },
              },
              {
                className: 'col-3',
                key: 'contractor',
                type: 'checkbox',
                templateOptions: {
                  label: 'Contractor',    
                },
              },
            ]
          }
      ]

    //BUDGET VARIATION FORM
    formBudgetIdentificator = "Budget";
    formBudgetValue = {};
    formBudgetFields: FormlyFieldConfig[] = [
      {
        className: 'section-label',
        template: '<hr /><div><strong>Estimated Additional Budget</strong></div>',
      },
      {
        className: 'section-label',
        template: '<hr /><div><strong>Estimated Additional Budget</strong></div>',
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
              templateOptions: {
                label: 'Amount',        
                type: 'number'
              },
            },
            
            {
                className: 'col',
                key: 'budgetAvailabilityYes',
                type: 'checkbox',
                templateOptions: {
                  label: 'yes',    
                },
              },
              {
                className: 'col',
                key: 'budgetAvailabilityNo',
                type: 'checkbox',
                templateOptions: {
                  label: 'no',    
                },
              },
              {
                className: 'col',
                key: 'budgetAvailabilityDofFunded',
                type: 'checkbox',
                templateOptions: {
                  label: 'DOF Funded',    
                },
              },
              {
                className: 'col',
                key: 'budgetAvailabilityClientFounded',
                type: 'checkbox',
                templateOptions: {
                  label: 'Client Funded',    
                },
              },
              {
                className: 'col-7',
                key: 'remarks',
                type: 'input',
                templateOptions: {
                  label: 'Remarks',
                },
              },
          ]
        }
    ]

    //PMCD RECOMMENDATION VARIATION FORM
    formPmcRecommendationIdentificator = "PMCD Recommendation";
    formPmcRecommendationValue = {};
    formPmcRecommendationFields: FormlyFieldConfig[] = [
      {
          fieldGroupClassName: 'row',
          fieldGroup: [
              {
                className: 'col-7',
                key: 'pmcRecommendation',
                type: 'input',
                templateOptions: {
                },
              },
          ]
        }
    ]

    //VALIDATION VARIATION HISTORY
    formValidationHistoryIdentificator = "Validation History";
    formValidationHistoryValue = {};
    formValidationHistoryFields: FormlyFieldConfig[] = [
      {
        className: 'section-label',
        template: '<hr /><div><strong>Variation List</strong></div>',
      },
      {
          fieldGroupClassName: 'row',
          fieldGroup: [
            {
              className: 'col-7',
              key: 'remarks',
              type: 'input',
              templateOptions: {
                label: 'Remarks',
              },
            },
          ]
        }
    ]

    //RECOMMENDATIONS VARIATION HISTORY
    formRecommendationsIdentificator = "Recommendations History";
    formRecommendationsValue = {};
    formRecommendationsFields: FormlyFieldConfig[] = [
      {
          fieldGroupClassName: 'row',
          fieldGroup: [
            {
              className: 'col-7',
              key: 'recommendations',
              type: 'input',
              templateOptions: {
              },
            },
          ]
        }
    ]


  // form1 = new FormGroup({});
  // model1 = { currency: 'aed', amount: 101 };
  // fields1: FormlyFieldConfig[] = [
  //   {
  //     className: 'section-label',
  //     template: '<hr /><div><strong>Estimated Cost Design</strong></div>',
  //   },
  //   {
  //     fieldGroupClassName: 'row',
  //     fieldGroup: [
  //       {
  //         className: 'col-3',
  //         key: 'currency',
  //         type: 'select',
  //         templateOptions: {
  //           label: 'Currency',
  //           options: [
  //             { label: 'AED', value: 'aed' },
  //             { label: 'USD', value: 'usd' },
  //           ],
  //         },
  //       },
  //       {
  //         className: 'col-3',
  //         key: 'amount',
  //         type: 'input',
  //         hooks: {
  //           onChanges: (data) => {
  //             console.log({ data });
  //           },
  //         },
  //         templateOptions: {
  //           type: 'number',
  //           label: 'Amount',
  //           change: (field, $event) => {
  //             const value = $event.srcElement.value;
  //             const durationValue = value / 5;
  //             const newModel = { ...this.model1, durationValue };
  //             this.model1 = newModel;
  //             console.log({ field, $event });
  //           },
  //         },
  //       },
  //       {
  //         className: 'col-3',
  //         key: 'duration',
  //         type: 'select',
  //         templateOptions: {
  //           type: 'number',
  //           label: 'Duration',
  //           options: [
  //             { label: 'Months', value: 'months' },
  //             { label: 'Years', value: 'years' },
  //           ],
  //         },
  //       },
  //       {
  //         className: 'col-3',
  //         key: 'durationValue',
  //         type: 'input',
  //         templateOptions: {
  //           type: 'number',
  //           label: 'Test',
  //         },
  //       },
  //     ],
  //   },
  // ];

  // form2 = new FormGroup({});
  // model2 = {};
  // fields2: FormlyFieldConfig[] = [
  //   {
  //     fieldGroupClassName: 'custom-row',
  //     fieldGroup: [
  //       {
  //         className: 'third',
  //         key: 'submissionType',
  //         type: 'input',
  //         templateOptions: {
  //           label: 'Submission Type',
  //           disabled: true,
  //         },
  //       },
  //       {
  //         className: 'third',
  //         key: 'userDirectorate',
  //         type: 'input',
  //         templateOptions: {
  //           label: 'User Directorate',
  //           disabled: true,
  //         },
  //       },
  //       {
  //         className: 'third',
  //         key: 'client',
  //         type: 'input',
  //         templateOptions: {
  //           label: 'Client',
  //         },
  //       },
  //     ],
  //   },
  //   {
  //     fieldGroupClassName: 'row',
  //     fieldGroup: [
  //       {
  //         className: 'col-4',
  //         key: 'proccurmentEngeneer',
  //         type: 'input',
  //         templateOptions: {
  //           label: 'Proccurment Engeneer',
  //           disabled: true,
  //         },
  //       },
  //       {
  //         className: 'col-4',
  //         key: 'fdqa',
  //         type: 'input',
  //         templateOptions: {
  //           label: 'FDQA',
  //           disabled: true,
  //         },
  //       },
  //       {
  //         className: 'col-4',
  //         key: 'tenderNumber',
  //         type: 'input',
  //         templateOptions: {
  //           label: 'Tender Number',
  //           type: 'number',
  //         },
  //       },
  //     ],
  //   },
  // ];

  onSubmit() {
    //console.log({ form: this.form1.value });
  }
}
