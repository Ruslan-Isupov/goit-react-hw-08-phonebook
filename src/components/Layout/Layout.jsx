import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Navigation } from 'components/Navigation/Navigation';
import { Blocks } from 'react-loader-spinner';
import css from './Layout.module.css';

export const Layout = () => {
  return (
    <>
      <header className={css.headerBox}>
        <Navigation />
      </header>
      <main>
        <Suspense
          fallback={
            <Blocks
              visible={true}
              height="80"
              width="80"
              ariaLabel="blocks-loading"
              wrapperClass={css.blocksWrapper}
            />
          }
        >
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
