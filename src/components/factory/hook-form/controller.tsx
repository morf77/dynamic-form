import { useWatch } from 'react-hook-form';
import { FIELDS_TYPE, VISIBILITY_CONDITION } from '../../../enums/services';
import { useGetUnknownListQuery } from '../../../services';
import ControlledDatePicker from './date-picker';
import ControlledInput from './input/controlled';
import ControlledRadio from './radio/controlled';
import ControlledSelect from './select';
import ControlledCheckBox from './checkbox/controlled';

function hasDynamicOptions(
  field: Service.field
): field is Service.fieldWithOptions & { dynamicOptions: unknown } {
  return field.type === FIELDS_TYPE.SELECT && 'dynamicOptions' in field;
}

function hasVisibility(field: Service.field): boolean {
  return field.type === FIELDS_TYPE.SELECT && 'visibility' in field;
}

function checkVisible(field: Service.field, dependentValue: string): boolean {
  if (!hasVisibility(field)) return true;

  const showingOperator = {
    [VISIBILITY_CONDITION.EQUALS]: (value: string) => value === field?.visibility?.value,
    // IF MORE CONDITIONS ARE NEEDED, ADD THEM HERE BRO  !

    default: (_?: string) => false
  }[field?.visibility?.condition || 'default'];

  return showingOperator(dependentValue);
}

const InputController: FC<Service.field> = props => {
  const propsAsDynamicOptions = props as unknown as Service.fieldWithDynamicOptions;

  const dependentValue = useWatch({
    name: props?.visibility?.dependsOn || propsAsDynamicOptions?.dynamicOptions?.dependsOn
  });

  // we can add animations for opening and closing the field

  // we have not post yet but if we needs we use mutation and custom function for handling post method !

  const { data, isLoading } = useGetUnknownListQuery(
    {
      endpoint: propsAsDynamicOptions?.dynamicOptions?.endpoint,
      ...{ [propsAsDynamicOptions?.dynamicOptions?.dependsOn]: dependentValue }
    },
    {
      skip:
        !hasDynamicOptions(props) ||
        propsAsDynamicOptions?.dynamicOptions?.method !== 'GET' ||
        !checkVisible(props, dependentValue)
    }
  );

  if ((props as Service.fieldBase).type === FIELDS_TYPE.DATE) {
    // we can add custom button component here
    return <ControlledDatePicker name={props.id} label={props.label} />;
  }

  if (!checkVisible(props, dependentValue)) return <></>;

  if (props.type === FIELDS_TYPE.GROUP) {
    return (
      <>
        {props.fields.map(field => (
          <InputController key={field.id} {...field} />
        ))}
      </>
    );
  }

  if (props.type === FIELDS_TYPE.RADIO) {
    return (
      <div>
        <div className="flex items-center gap-2">
          {props.required && <div className="text-red-500 text-5xl pt-5">*</div>}
          <label>{props.label}</label>
        </div>

        <div className="flex gap-10 items-center">
          {props.options?.map(item => (
            <div className="flex gap-5 items-center">
              <ControlledRadio key={item} name={props.id} value={item} className="cursor-pointer" />

              <label className="text-2xs" htmlFor={`${item}`}>
                {item}
              </label>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (props.type === FIELDS_TYPE.CHECKBOX) {
    return (
      <div>
        <div className="flex items-center gap-2">
          {props.required && <div className="text-red-500 text-5xl pt-5">*</div>}
          <label>{props.label}</label>
        </div>

        <div className="flex gap-10 items-center">
          {props.options?.map(item => (
            <div className="flex gap-5 items-center">
              <ControlledCheckBox
                key={item}
                name={props.id}
                value={item}
                className="cursor-pointer"
              />

              <label className="text-2xs" htmlFor={`${item}`}>
                {item}
              </label>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (props.type === FIELDS_TYPE.SELECT) {
    if (props.options && props.options.length > 0) {
      return (
        <ControlledSelect
          name={props.id}
          label={props.label}
          isLoading={isLoading}
          list={props.options.map(item => ({ label: item, value: item }))}
        />
      );
    }

    if (hasDynamicOptions(props)) {
      return (
        <ControlledSelect
          name={props.id}
          isLoading={isLoading}
          label={props.label}
          list={data?.map(item => ({ label: item, value: item })) || []}
        />
      );
    }

    return <></>;
  }

  return (
    <ControlledInput
      required={props.required}
      label={props.label}
      name={props.id}
      type={props.type}
    />
  );
};

export default InputController;
