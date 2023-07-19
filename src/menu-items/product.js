// assets
import { IconKey } from '@tabler/icons';

// constant
const icons = {
  IconKey
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

// const products = {
//   id: 'mproduct',
//   title: 'Product',
//   caption: 'Pages Caption',
//   type: 'group',
//   children: [
//     {
//       id: 'mproduct',
//       title: 'Manage Product',
//       type: 'collapse',
//       icon: icons.IconKey,

//       children: [
//         {
//           id: 'add-product',
//           title: 'Add Product',
//           type: 'item',
//           url: '/mproduct/add-product',
//         //   target: true
//         },
//         {
//           id: 'view-product',
//           title: 'View Product',
//           type: 'item',
//           url: '/mproduct/view-product',
//         //   target: true
//         }
//       ]
//     }
//   ]
// };



const products = {
  id: 'mproduct',
  title: 'Product',
  type: 'group',
  children: [
    {
      id: 'view-product',
      title: 'Product',
      type: 'item',
      url: '/mproduct/view-product',
      icon: icons.IconDashboard,
      breadcrumbs: false
    }

  ]
};


export default products;
