import TabDisplayToggler from './dispay-taggler';
import TabDisplay from './display';
import TabProvider from './provider';
import TabContent from './tab-content';
import useTab from './use-tab';

const Tab = {
  provider: TabProvider,
  display: TabDisplay,
  content: TabContent,
  useTab,
  TabDisplayToggler
};

export default Tab;
