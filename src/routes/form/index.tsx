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

const PageForm: FC = () => {
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

  console.log(isLoadingForms, isUninitialized);

  console.log(skeletons, data, (isLoading || isUninitialized) && !data?.length);

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

  console.log('Tabs:', tabs);

  return (
    <TabProvider tabs={tabs} defaultTab={tabs[0]?.query}>
      <TabDisplayToggler isLoading={isLoadingForms} />
      {!!error && <p>Error loading forms: {(error as any)?.message}</p>}
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(async data => {
            console.log('Form data:', data);

            await post(data);

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
