// Isolated TypeScript declaration file for Service enums

declare namespace Service.enums {
  //
  type FIELD_TYPE = import('../enums/services').FIELDS_TYPE;

  type FIELD_TYPE_SELECT = import('../enums/services').FIELDS_TYPE.SELECT;

  type FIELD_TYPE_TEXT = import('../enums/services').FIELDS_TYPE.TEXT;

  type FIELD_TYPE_RADIO = import('../enums/services').FIELDS_TYPE.RADIO;

  type FIELD_TYPE_NUMBER = import('../enums/services').FIELDS_TYPE.NUMBER;

  type FIELD_TYPE_CHECKBOX = import('../enums/services').FIELDS_TYPE.CHECKBOX;

  type FIELD_TYPE_GROUP = import('../enums/services').FIELDS_TYPE.GROUP;

  type FIELD_TYPE_DYNAMIC_OPTIONS = import('../enums/services').FIELDS_TYPE.SELECT;

  //
  type VISIBILITY_CONDITION = import('../enums/services').VISIBILITY_CONDITION;

  type HTTP_METHOD = import('../enums/services').HTTP_METHOD;
}
