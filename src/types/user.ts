export type User = {
  id: string;
  username: string;
  email: string;
  accessToken: string;
  subscriberCount?: number;
  subscribedCount?: number;
  isSubscribed?: boolean;
};
