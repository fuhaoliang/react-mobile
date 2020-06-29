import App from '../App';
import Home from '../pages/Home';
import About from '../pages/About';
import Product from '../pages/Product/index';
import Item from '../pages/Product/Item';

const routes = [
  {
    component: App,
    routes: [
      {
        path: '/',
        exact: true,
        component: Home,
      },
      {
        path: '/about',
        exact: true,
        component: About,
      },
      {
        path: '/product/:id',
        component: Product,
        routes: [
          {
            path: '/product/:id/item',
            component: Item,
          },
        ],
      },
    ],
  },
];

export default routes;
