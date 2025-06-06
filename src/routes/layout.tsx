import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import Link from '../components/ui/button/link';
import UserSettingHandler from '../providers/user-setting-handler';

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  const { t, i18n } = useTranslation();

  const location = useLocation();

  const locale = location.pathname.split('/')[1] || 'en';

  const isResult = location.pathname.includes('/result');

  return (
    <div
      className={`flex flex-col h-[100svh] pt-[2vh] sm:px-[15%] lg:px-[20%] xl:px-[25%] 2xl:px-[30%]`}
      dir={locale === 'en' ? 'lrt' : 'rtl'}
    >
      <div className="mx-[6vw] flex justify-between border-b pb-3">
        <div className="flex gap-5 items-center">
          <h1 className="text-lg text-primary-500 dark:text-primary-200"> {t('insuranceApp')}</h1>

          <Link
            color="gradientBase"
            size="xSmall"
            to={isResult ? `/${i18n.language}` : `/${i18n.language}/result`}
          >
            {isResult ? t('addNew') : t('history')}
          </Link>
        </div>

        {<UserSettingHandler />}
      </div>

      <div className="grow overflow-y-auto overflow-x-hidden scroll relative max-w-full">
        {/* for modals and other absolute loadings */}
        <div id="layout" />
        <div className="pt-5 pb-[3vh] h-full px-[7vw]">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
