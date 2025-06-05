import { useEffect, useImperativeHandle, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { TabContext } from './use-tab';
import { QUERY_PARAM } from '../../../enums/query';

const TabProvider: FC<Components.ui.tab.provider> = ({
  isConnectedToURL = true,
  queryKey = QUERY_PARAM.TAB,
  hasDefault = true,
  children,
  ref,
  tabs,
  // dynamicHref,
  defaultTab
}) => {
  const location = useLocation();
  const navigate = useNavigate();

  // Helper to get tab query param from URL
  const getTabFromURL = () => {
    const params = new URLSearchParams(location.search);
    return params.get(queryKey); // or use QUERY_PARAM.TAB if you have it
  };

  // Find the default tab
  const exactDefault = hasDefault
    ? defaultTab
      ? tabs.find(item => item?.query === defaultTab)!
      : tabs[0]
    : null;

  // State for active tab
  const [tab, setTab] = useState<Components.ui.tab.tab | null>(exactDefault);

  // last active tab (for animations)
  const [lastTab, setLastTab] = useState(tab);

  // helpers --------------------------------------------------

  const changeTab = (query: string | null) => {
    setLastTab(tab);
    const foundTab = tabs.find(item => item?.query === query) || null;
    setTab(foundTab);

    // Update URL if connected
    if (isConnectedToURL) {
      const params = new URLSearchParams(location.search);
      if (query) {
        params.set(queryKey, query); // or use QUERY_PARAM.TAB
      } else {
        params.delete(queryKey);
      }
      navigate({ search: params.toString() }, { replace: true });
    }
  };

  // animation states
  const [changing, setChanging] = useState(false);

  useImperativeHandle(ref, () => ({
    changeTab
  }));

  // tab changing logic -----------------------------------------------------------------------

  useEffect(() => {
    if (lastTab?.query !== tab?.query) {
      setChanging(true);

      const timeout = setTimeout(() => {
        setLastTab(tab);
        setChanging(false);
      }, 200);

      return () => {
        setChanging(false);
        clearTimeout(timeout);
      };
    }

    return () => {};
  }, [tab]);

  // On mount: if connected to URL, set tab from URL param if exists
  useEffect(() => {
    if (isConnectedToURL && tabs.length) {
      const tabQuery = getTabFromURL();
      const foundTab = tabs.find(item => item?.query === tabQuery);
      if (foundTab) {
        setTab(foundTab);
      } else {
        setTab(exactDefault || tabs[0]);
      }
    } else if (!isConnectedToURL && tabs.length) {
      setTab(exactDefault || tabs[0]);
    }
    // eslint-disable-next-line
  }, [tabs.map(item => item?.query).join(','), location.search, isConnectedToURL]);

  return (
    <TabContext.Provider value={{ tab, tabs, changing, changeTab, lastTab }}>
      {children}
    </TabContext.Provider>
  );
};

export default TabProvider;
