import { useLocation } from 'react-router-dom';
import Button from '../components/ui/button';
import UserSettingHandler from '../providers/user-setting-handler';

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  const location = useLocation();

  const isResult = location.pathname.includes('/result');

  return (
    <div
      className={`flex flex-col h-[100svh] pt-[2vh] sm:px-[15%] lg:px-[20%] xl:px-[25%] 2xl:px-[30%]`}
    >
      <div className="mx-[6vw] flex justify-between border-b pb-3">
        <div className="flex gap-5 items-center">
          <h1 className="text-lg text-primary-500 dark:text-primary-200">Insurance App</h1>

          <a href={isResult ? '/' : '/result'}>
            <Button color="success" size="xSmall">
              {isResult ? 'Add New' : 'History'}
            </Button>
          </a>
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
