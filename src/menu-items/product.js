// assets
import { IconKey } from '@tabler/icons';

// constant
const icons = {
  IconKey
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const products = {
  id: 'mproduct',
  title: 'Product',
  caption: 'Pages Caption',
  type: 'group',
  children: [
    {
      id: 'mproduct',
      title: 'Manage Product',
      type: 'collapse',
      icon: icons.IconKey,

      children: [
        {
          id: 'add-product',
          title: 'Add Product',
          type: 'item',
          url: '/mproduct/add-product',
        //   target: true
        },
        {
          id: 'register3',
          title: 'Register',
          type: 'item',
          url: '/pages/register/register3',
        //   target: true
        }
      ]
    }
  ]
};

export default products;
