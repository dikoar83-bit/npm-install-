export interface User {
  id: string;
  name: string;
  username: string;
  avatar?: string;
  bio?: string;
}

export interface Post {
  id: string;
  userId: string;
  user: User;
  content: string;
  likes: number;
  comments: number;
  createdAt: number;
}

export interface Feature {
  title: string;
  description: string;
  icon: string;
}
