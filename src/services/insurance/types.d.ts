declare namespace Service {
  // For Get Forms

  interface fieldBase {
    id: string;
    label: string;
    type: enums.FIELD_TYPE;
    required: boolean;
    visibility?: {
      dependsOn: string;
      condition: enums.VISIBILITY_CONDITION;
      value: string;
    };
  }

  interface fieldWithOptions extends fieldBase {
    type: enums.FIELD_TYPE_SELECT | enums.FIELD_TYPE_RADIO | enums.FIELD_TYPE_CHECKBOX;
    options: string[];
  }

  interface fieldWithValidation extends fieldBase {
    type: enums.FIELD_TYPE_NUMBER | enums.FIELD_TYPE_TEXT;
    validation?: {
      min?: number;
      max?: number;
      pattern?: string;
    };
  }

  interface groupField extends fieldBase {
    type: enums.FIELD_TYPE_GROUP;
    fields: field[];
  }

  interface fieldWithDynamicOptions extends fieldBase {
    type: enums.FIELD_TYPE_SELECT;
    dynamicOptions: {
      dependsOn: string;
      endpoint: string;
      method: HttpMethod;
    };
  }

  type field = fieldBase & (fieldWithOptions | fieldWithValidation | groupField);

  interface forms {
    formId: string;
    title: string;
    fields: field[];
  }

  interface results {
    columns: string[];
    data: Record<string, string>[];
  }

  // For Post Form
}
