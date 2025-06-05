import TogglerMultiple from '../toggler/multiple';
import useTab from './use-tab';

const TabDisplayToggler: FC<{
  className?: string;
  filterQueries?: Array<string>;
  isLoading?: boolean;
}> = ({ className, filterQueries, isLoading }) => {
  const { changeTab, tab, tabs } = useTab();

  const filteredList = filterQueries?.length
    ? tabs.filter(item => !filterQueries.some(child => child === item?.query))
    : tabs;

  return (
    <TogglerMultiple
      isLoading={isLoading}
      className={className}
      list={filteredList.map(item => ({
        label: item?.name || '',
        value: item?.query || '',
        disabled: item?.disabled
      }))}
      active={tab?.query!}
      onChange={changeTab}
    />
  );
};

export default TabDisplayToggler;
