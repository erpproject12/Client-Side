// assets
import { IconDashboard } from '@tabler/icons';

// constant
const icons = { IconDashboard };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const party = {
  id: 'mparty',
  title: 'party',
  type: 'group',
  children: [
    {
      id: 'view-party',
      title: 'party',
      type: 'item',
      url: '/mparty/view-party',
      icon: icons.IconDashboard,
      breadcrumbs: false
    }
  ]
};

export default party;
