declare namespace Components.ui {
  type ICON_NAME = import('../../../lib/icon').ICON_NAME;

  type QUERY_PARAM = import('../../../enums/query').QUERY_PARAM;

  namespace tab {
    type tabButton = Pick<
      button,
      'className' | 'color' | 'onClick' | 'size' | 'variation' | 'disabled' | 'isLoading'
    >;

    type tab = tabButton & {
      content: DynamicComponent<undefined>;
      name: ReactNode;
      icon?: ICON_NAME;
      query: string;
    };

    interface ref {
      changeTab: (query: string) => void;
    }

    type provider = {
      isConnectedToURL?: boolean;
      hasDefault?: boolean;
      queryKey?: QUERY_PARAM;
      dynamicHref?: string;
      defaultTab?: string;
      children: ReactNode;
      tabs: Array<tab | null>;
      ref?: Ref<ref | undefined>;
    };

    type context = {
      tabs: Array<tab | null>;
      tab: tab | null;
      lastTab: tab | null;
      changing: boolean;
      changeTab: (key: string | null) => void;
    };
  }
}
