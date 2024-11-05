import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '../layout/Layout';
import { AddNewSubscriber } from '../pages/addNewSubscriber/addNewSubscriber';
import { Advantages } from '../pages/advantages/advantages';
import { ESim } from '../pages/eSim/eSim';
import { PromoRate } from '../pages/promeRate/promoRate';
import { Rates } from '../pages/rates/rates';
import { Sales } from '../pages/sales/sales';
import links from './links';
export const router = createBrowserRouter([
  {
    path: links.home,
    element: <Layout />,
    children: [
      {
        path: links.advantages,
        element: <Advantages />,
      },
      {
        path: links.rates,
        element: <Rates />,
      },
      {
        path: links.sales,
        element: <Sales />,
      },
      {
        path: links.promoRate,
        element: <PromoRate />,
      },
      {
        path: links.eSim,
        element: <ESim />,
      },
      {
        path: links.addNewSubscriber,
        element: <AddNewSubscriber />,
      },
    ],
  },
]);
