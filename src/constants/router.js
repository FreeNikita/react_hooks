import GlobalFeed from '../pages/globalFeed';
import TagFeed from '../pages/tagFeed';
import YourFeed from '../pages/yourFeed';
import Article from '../pages/article';
import CreateArticle from '../pages/createArticle';
import EditArticle from '../pages/editArticle';
import Login from '../pages/login';
import Registration from '../pages/registration';
import UserSettings from '../pages/userSettings';

export const PAGE_GLOBAL_URL = '/';
export const PAGE_TAGS_URL = '/tags';
export const PAGE_FEED_URL = '/feed';
export const PAGE_FEED_BY_TAG_URL = '/tags/:slug';
export const PAGE_ARTICLE_BY_SLAG_URL = '/article/:slug';

export const PAGE_LOGIC_URL = '/login';
export const PAGE_REGISTER_URL = '/register';

export const PAGE_PROFILE_URL = '/profiles';
export const PAGE_SETTINGS_URL = '/settings';

export const PAGE_ARTICLE_URL = '/article';
export const PAGE_ARTICLES_URL = '/articles';
export const PAGE_ARTICLES_NEW_URL = '/articles/new';
export const PAGE_ARTICLES_EDIT_URL = '/articles/:slug/edit';


export const ROUTER = [
  {
    url: PAGE_GLOBAL_URL,
    component: GlobalFeed,
  },
  {
    url: PAGE_FEED_BY_TAG_URL,
    component: TagFeed,
  },
  {
    url: PAGE_FEED_URL,
    component: YourFeed,
  },
  {
    url: PAGE_ARTICLE_BY_SLAG_URL,
    component: Article,
  },
  {
    url: PAGE_LOGIC_URL,
    component: Login,
  },
  {
    url: PAGE_REGISTER_URL,
    component: Registration,
  },
  {
    url: PAGE_ARTICLES_NEW_URL,
    component: CreateArticle,
  },
  {
    url: PAGE_ARTICLES_NEW_URL,
    component: CreateArticle,
  },
  {
    url: PAGE_ARTICLES_EDIT_URL,
    component: EditArticle,
  },
  {
    url: PAGE_SETTINGS_URL,
    component: UserSettings,
  },
];
