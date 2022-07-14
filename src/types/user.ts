export type UserType = {
  id: string;
  username: string;
  email: string;
  accessToken: string;
  subscriberCount?: number;
  subscribedCount?: number;
  isSubscribed?: boolean;
};

export type SubscriberType = {
  id: string;
  user: UserType;
};
