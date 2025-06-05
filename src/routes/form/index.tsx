import { FormProvider, useForm } from 'react-hook-form';
import InputController from '../../components/factory/hook-form/controller';
import { useGetFormsQuery, usePostFormResultMutation } from '../../services/insurance';
import TabProvider from '../../components/ui/tab/provider';
import TabDisplayToggler from '../../components/ui/tab/dispay-taggler';
import TabContent from '../../components/ui/tab/tab-content';
import Badge from '../../components/ui/badge';
import ControlledButtonSubmit from '../../components/factory/hook-form/button-submit';
import { useNavigate } from 'react-router-dom';
import { FIELDS_TYPE } from '../../enums/services';
import SkeletonFetchingLoading from '../../components/ui/loaders/skeleton';
import Button from '../../components/ui/button';
import { objectCleaner } from '../../helpers/object';
import useAppTranslation from '../../lib/i18n';

type NestedArray = Array<string | NestedArray>;

const PageForm: FC = () => {
  const translate = useAppTranslation('translate');

  const navigate = useNavigate();

  const {
    data,
    error,
    isLoading: isLoadingForms,
    isFetching,
    isUninitialized
  } = useGetFormsQuery();

  const [post, { isLoading }] = usePostFormResultMutation();

  const methods = useForm({});

  const skeletons: Array<Service.forms> = Array.from(
    { length: 3 },
    (_, index) =>
      ({
        title: `Form Form Form Form Form ${index + 1}`,
        formId: `form-${index + 1}`,
        fields: Array.from({ length: 6 }, (_, fieldIndex) => ({
          id: `field-${index}-${fieldIndex}`,
          label: `Field ${fieldIndex + 1}`,
          type: FIELDS_TYPE.TEXT,
          name: `field-${index}-${fieldIndex}`,
          required: false
        }))
      }) as Service.forms
  );

  const tabs: Array<Components.ui.tab.tab> = (
    ((isLoadingForms || isUninitialized) && !data ? skeletons : data) || []
  )?.map(item => ({
    content: () => (
      <>
        <SkeletonFetchingLoading
          className="rounded-xl"
          isLoading={isLoadingForms}
          isFetching={isFetching}
        >
          <div className="flex items-center justify-between gap-5">
            <Button size="medium" color="danger" onClick={() => methods.reset()}>
              Reset
            </Button>
            <Badge size="medium" className="w-full" color="info">
              {item.title}
            </Badge>
          </div>
        </SkeletonFetchingLoading>

        {item.fields.map(field => (
          <SkeletonFetchingLoading
            className="rounded-lg"
            isLoading={isLoadingForms}
            isFetching={isFetching}
          >
            <InputController key={field.id} {...field} />
          </SkeletonFetchingLoading>
        ))}

        <ControlledButtonSubmit isLoading={isLoading}>Submit</ControlledButtonSubmit>
      </>
    ),
    name: item.title,
    query: item.formId
  }));

  return (
    <TabProvider tabs={tabs} defaultTab={tabs[0]?.query}>
      <TabDisplayToggler isLoading={isLoadingForms} />
      {!!error && <p>Error loading forms: {(error as any)?.message}</p>}
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(async form => {
            const currentTab =
              tabs.find(tab => window.location.href.includes(tab.query)) || tabs[0];

            const selectedData = data?.find(item => item.formId === currentTab.query);

            const keyExtractor = (field: Service.field): string | NestedArray => {
              if (field.type === FIELDS_TYPE.GROUP) {
                return field.fields.map(item => keyExtractor(item)).flat();
              }

              return field.id;
            };

            const allowedKeys = selectedData?.fields.map(keyExtractor).flat() as Array<string>;

            // Filter data: only send allowed keys
            const filteredData = Object.fromEntries(
              Object.entries(form).filter(([key]) => allowedKeys.includes(key))
            );

            await post(objectCleaner({ object: filteredData }));

            navigate('/result');
          })}
          className="flex flex-col gap-4"
        >
          <TabContent className="flex flex-col gap-10 py-10" calcDimensions={false} />
        </form>
      </FormProvider>
    </TabProvider>
  );
};

export default PageForm;
