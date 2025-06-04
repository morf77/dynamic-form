import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { twMerge } from 'tailwind-merge';
import { changeTheme } from '../store/slices/user-setting';
import Toggler from '../components/ui/toggler';
import Icon, { ICON_NAME } from '../lib/icon';

const UserSettingHandler = () => {
  const { theme } = useSelector((state: RootState) => state.userSetting);

  const dispatch = useDispatch();

  // enabling service schema

  useEffect(() => {
    import('../components/ui/loaders/circle/circle');
    import('../components/ui/loaders//spinner');
    import('../components/ui/loaders/absolute-circle');
  }, []);

  return (
    <button
      className={twMerge('flex justify-between items-center')}
      onClick={() => dispatch(changeTheme(theme === 'dark' ? 'light' : 'dark'))}
    >
      <div className="flex gap-4 items-center">
        {theme === 'dark' ? (
          <Icon name={ICON_NAME.MOON} className="size-12 fill-gray-100" />
        ) : (
          <Icon name={ICON_NAME.SUN} className="size-12 fill-primary-500" />
        )}

        {theme === 'dark' ? 'حالت تاریک' : 'حالت روشن'}
      </div>

      <Toggler
        isChecked={theme === 'dark'}
        onChange={() => {}}
        // onChange={() => dispatch(changeTheme(theme === 'dark' ? 'light' : 'dark'))}
      />
    </button>
  );
};

export default UserSettingHandler;
