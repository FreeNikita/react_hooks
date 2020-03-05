import GlobalFeed from '../pages/globalFeed'
import Article from '../pages/article'
import Login from '../pages/login'
import Registration from '../pages/registration'

export const PAGE_GLOBAL_URL = '/';
export const PAGE_ARTICLE_URL = '/article/:slug';
export const PAGE_LOGIC_URL = '/login';
export const PAGE_REGISTER_URL = '/register';

export const ROUTER = [
    {
        url: PAGE_GLOBAL_URL,
        component: GlobalFeed
    },
    {
        url: PAGE_ARTICLE_URL,
        component: Article
    },
    {
        url: PAGE_LOGIC_URL,
        component: Login
    },
    {
        url: PAGE_REGISTER_URL,
        component: Registration
    },
];

export const APP_BAR_ITEMS = [
    {
        url: PAGE_GLOBAL_URL,
        title: 'Home'
    },
    {
        url: PAGE_LOGIC_URL,
        title: 'Sign In'
    },
    {
        url: PAGE_REGISTER_URL,
        title: 'Sign Up'
    },
];