import {Post} from './post';

export type AuthNavigationList = {Auth: undefined; Home: undefined};

export type MainNavigationList = {
  Home: undefined;
  Profile: {userId: string};
  AddPost: undefined;
  PostEditor: {imageUrl: string};
  PostView: {post: Post};
};
