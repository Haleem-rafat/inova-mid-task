import SuspenseLoader from '@UI/Loaders/SuspenseLoader';
import { router } from '@app/router';
import { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { SWRConfig } from 'swr';

import './index.css';

document.querySelector('#loader.bigramy-loader')?.remove();

const root = ReactDOM.createRoot(document.getElementById('root')!);

async function main() {
  root.render(
    <SWRConfig
      value={{
        revalidateIfStale: false,
        revalidateOnMount: true,
        revalidateOnFocus: false,
        revalidateOnReconnect: true,
        errorRetryInterval: 2000,
        dedupingInterval: 3000,
        loadingTimeout: 5000,
        errorRetryCount: 3,
      }}>
      <Suspense fallback={<SuspenseLoader />}>
        <RouterProvider router={router} />
      </Suspense>
    </SWRConfig>
  );
}

main();
