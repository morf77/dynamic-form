import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { twMerge } from 'tailwind-merge';
import Toggler from '../components/ui/toggler';
import Icon, { ICON_NAME } from '../lib/icon';
import { changeTheme } from '../store/slices/user-setting';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const UserSettingHandler = () => {
  const location = useLocation();

  const locale = location.pathname.split('/')[1] || 'en';

  const navigate = useNavigate();

  const { i18n } = useTranslation();

  const { theme } = useSelector((state: RootState) => state.userSetting);

  const dispatch = useDispatch();

  useEffect(() => {
    if (locale !== 'en' && locale !== 'fa') {
      navigate('/en' + location.pathname + location.search, { replace: true });
    }
  }, [locale, location.pathname, location.search, navigate]);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    import('../components/ui/loaders/circle/circle');
    import('../components/ui/loaders//spinner');
    import('../components/ui/loaders/absolute-circle');
  }, []);

  useEffect(() => {
    i18n.language !== locale && i18n.changeLanguage(locale);
  }, [locale]);

  const handleLocaleChange = () => {
    const newLocale = locale === 'en' ? 'fa' : 'en';
    const newPath = location.pathname.replace(/^\/(en|fa)/, `/${newLocale}`);

    navigate(newPath + location.search);
    i18n.changeLanguage(newLocale);
  };

  return (
    <div className={twMerge('flex justify-between items-center gap-5')}>
      <div className="flex gap-4 items-center justify-between">
        {theme === 'dark' ? (
          <Icon name={ICON_NAME.MOON} className="size-12 fill-gray-100" />
        ) : (
          <Icon
            name={ICON_NAME.SUN}
            className="size-12 fill-yellow-500 stroke-yellow-500 text-yellow-500"
          />
        )}
      </div>

      <Toggler
        isChecked={theme === 'dark'}
        onChange={() => dispatch(changeTheme(theme === 'dark' ? 'light' : 'dark'))}
      />

      <div className="flex gap-4 items-center justify-between">{locale === 'en' ? 'En' : 'Fa'}</div>

      <Toggler
        isChecked={locale === 'fa'}
        onChange={handleLocaleChange}
        // onChange={() => dispatch(changeTheme(theme === 'dark' ? 'light' : 'dark'))}
      />
    </div>
  );
};

export default UserSettingHandler;
