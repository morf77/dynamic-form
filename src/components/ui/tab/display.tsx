import Button from '../button';
import SkeletonFetchingLoading from '../loaders/skeleton';
import useTab from './use-tab';

const TabDisplay: FC<
  Components.ui.tab.tabButton &
    Partial<Pick<Components.ui.shared, 'classNameContainer'>> & { notShowActive?: boolean }
> = ({ classNameContainer, isLoading, notShowActive, ...restProps }) => {
  const { tabs, changeTab, tab } = useTab();

  const filteredTabs = notShowActive ? tabs.filter(item => item?.query !== tab?.query) : tabs;

  return (
    <div className={`flex overflow-auto scroll text-center gap-2 px-1 ${classNameContainer}`}>
      {filteredTabs.map((item, index) => {
        if (!item) return;
        const { query, name, content, ...styles } = item;

        return (
          <li key={`${query}${index}`}>
            <SkeletonFetchingLoading
              className="rounded-lg"
              isFetching={isLoading}
              isLoading={isLoading}
            >
              <Button
                {...restProps}
                {...styles}
                disabled={isLoading}
                onClick={() => {
                  restProps.onClick?.();
                  item.onClick?.();
                  changeTab(query);
                }}
                isActive={tab?.query == query}
              >
                {name}
              </Button>
            </SkeletonFetchingLoading>
          </li>
        );
      })}
    </div>
  );
};

export default TabDisplay;
