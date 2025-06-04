declare namespace Components.ui {
  namespace loaders {
    type spinner = Partial<Pick<Components.ui.shared, 'className'>> & {
      variation?: 'basic';
    };

    type skeleton = Partial<Pick<shared, 'isLoading' | 'isFetching' | 'children'>> & {
      variation?: 'basic';
      fetchType?: 'gradient' | 'breathing';
      loadType?: 'gradient' | 'breathing';
      gradientSkeletonSize?: 'Large' | 'Small';
      className?: string;
    };

    type circle = {
      variation?: 'basic';
      classNameContainer?: string;
      className?: string;
      size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xl';
    };
  }
}
