import GlobalFeed from '../pages/globalFeed'
import Article from '../pages/article'
import Login from '../pages/login'
import Registration from '../pages/registration'

export const PAGE_GLOBAL_URL = '/';
export const PAGE_ARTICLE_BY_SLAG_URL = '/article/:slug';
export const PAGE_LOGIC_URL = '/login';
export const PAGE_REGISTER_URL = '/register';
export const PAGE_NEW_ARTICLE_URL = '/register';
export const PAGE_PROFILE_URL = '/profiles';
export const PAGE_ARTICLE_URL = '/article';
export const PAGE_ARTICLES_URL = '/articles';

export const ROUTER = [
    {
        url: PAGE_GLOBAL_URL,
        component: GlobalFeed
    },
    {
        url: PAGE_ARTICLE_BY_SLAG_URL,
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
