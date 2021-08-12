import DashboardIcon from './assets/DashboardIcon.svg';
import DashboardIconActive from './assets/DashboardIconActive.svg';
import AccountsIcon from './assets/AccountsIcon.svg';
import AccountsIconActive from './assets/AccountsIconActive.svg';
import SecureIcon from './assets/SecureIcon.svg';
import SecureIconActive from './assets/SecureIconActive.svg';
import SettingsIcon from './assets/SettingsIcon.svg';
import SettingsIconActive from './assets/SettingsIconActive.svg';
import TransactionsIcon from './assets/TransactionsIcon.svg';
import TransactionsIconActive from './assets/TransactionsIconActive.svg';
import SignOutIcon from './assets/SignOutIcon.svg';

//Pages
import Dashboard from "./pages/Dashboard"
import Jobs from "./pages/Jobs"
import Profile from "./pages/Profile"
import Secure from "./pages/Secure"
import Settings from "./pages/Settings"



const routes = [
    {
        label: 'Dashboard',
        path: '/',
        icon: DashboardIcon,
        activeIcon: DashboardIconActive,
        component: Dashboard,
    },
    {
        label: 'Jobs',
        path: '/jobs',
        icon: AccountsIcon,
        activeIcon: AccountsIconActive,
        component: Jobs
    },
    {
        label: 'Secure',
        path: '/secure',
        icon: SecureIcon,
        activeIcon: SecureIconActive,
        component: Secure
    },
    {
        label: 'Settings',
        path: '/settings',
        icon: SettingsIcon,
        activeIcon: SettingsIconActive,
        component: Settings
    },
    {
        label: 'Profile',
        path: '/profile',
        icon: TransactionsIcon,
        activeIcon: TransactionsIconActive,
        component: Profile
    },
    {
        label: "Sign Out",
        path: "/sign-out",
        icon: SignOutIcon,
        activeIcon: SignOutIcon,
      },
];

export default routes;