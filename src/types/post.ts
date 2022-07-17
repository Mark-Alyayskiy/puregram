export type Post = {
  id: string;
  username: string;
  userId: string;
  likesCount: number;
  imageUrl: string;
  avatarUrl: string;
  created_at: string;
  label: string;
  isPostLikedByUser: boolean;
  commentsCount?: number;
};
