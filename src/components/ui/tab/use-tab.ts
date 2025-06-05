import { createContext, useContext } from 'react';

export const TabContext = createContext<Components.ui.tab.context | null>(null);

const useTab = () => {
  const context = useContext(TabContext);
  if (!context) {
    throw new Error('useTab must be used within a TabProvider');
  }
  return context;
};

export default useTab;
